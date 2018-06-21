import {
	Injectable
} from '@angular/core';
import {
	Http
} from '@angular/http';
import {
	LoadingController
} from 'ionic-angular';
import {
	InitParams
} from 'ngx-facebook';
import 'rxjs/add/operator/map';

import * as moment from 'moment';
import * as Parse from 'parse';
import {GlobalConfigurationService} from '../providers/global-configuration-service';

declare var require: any;

/*
 Generated class for the Parse provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ParseService {
	// public Parse = require("Parse");
	roomList: any;
	public bookedRoomOrderId: string;

	constructor(public http: Http,
				public loadingCtrl: LoadingController,
				private globalConfig: GlobalConfigurationService) {
		Parse.initialize("KLIKPEGI_ENGINE");
		Parse.serverURL = "http://api.klikpegi.com:8283/klikpegiapi";
	}

	public getUserContact(keyword: string) {
		let user = Parse.User.current();
		if (user == null) {
			return [];
		} else {
			let userContact = user.relation('contact_list');
			let qUserContact = userContact.query();

			// qUserContact.contains("contact_name", keyword);
			qUserContact.contains("contact_name_src", keyword.toLowerCase());
			let contactList = [];
			return qUserContact.find().then(contacts => {
				for (let contact of contacts) {
					let contactData = {
						name: contact.get("contact_name"),
						phone: contact.get("contact_phone"),
						email: contact.get("contact_email")
					};
					contactList.push(contactData);
				}
				console.log(JSON.stringify(contactList));
				return contactList;
			});
		}
	}

	public getCurrentUser() {
		let user = Parse.User.current();
		if (user == null) {
			console.log('no user found');
			return null;
		} else {
			let userData = {
				id: user.id,
				fullName: user.get("fullName"),
				email: user.get("username"),
				phoneNo: user.get("phone_number"),
			};
			return userData;
		}
	}

	public getRoomList() {
		let user = Parse.User.current();
		let room = Parse.Object.extend("Room");
		let query = new Parse.Query(room);
		let roomList = [];

		query.include("owner");
		query.equalTo("owner", {
			__type: "Pointer",
			className: "_User",
			objectId: user.id
		});
		return query.find().then((rooms) => {
			for (let room of rooms) {
				let roomData = {
					name: room.get("name"),
					desc: room.get("description"),
					location: room.get("location"),
					id: room.id
				};
				roomList.push(roomData);
			}
			return roomList;
		});
	}

	public getGlobalSettings() {
		let setting = Parse.Object.extend("Global");
		let query = new Parse.Query(setting);
		// query.equalTo("objectId", 'ZVkfqnFzg2');
		return query.first().then(data => {
			let globalSettings = {
				id: data.id,
				email: data.get('adminEmail'),
				bank: data.get('bankAccount')
			}
			return globalSettings;
		});
	}

	public getRoomDetails(room_id) {
		let room = Parse.Object.extend("Room");
		let query = new Parse.Query(room);
		console.log(room_id);
		query.equalTo("objectId", room_id);
		query.include("owner");
		query.include("tenant");

		return query.first().then((dt) => {
			let detailData = {
				name: dt.get("name"),
				desc: dt.get("description"),
				owner: dt.get("owner").get("first_name"),
				price: dt.get("price"),
				thumbnail: dt.get("thumbnail") ? dt.get("thumbnail")._url : "assets/images/Placeholder.png",
			};
			console.log(detailData);
			return detailData;
		});
	}

	public getOwnerRoomDetails(room_id) {
		let room = Parse.Object.extend("Room");
		let bookings = Parse.Object.extend("Booking");

		let query = new Parse.Query(room);
		let bookingsQuery = new Parse.Query(bookings);

		let bookingList = [];
		let roomData = {
			detail: {},
			bookings: {}
		};

		console.log(room_id);
		query.equalTo("objectId", room_id);
		query.include("owner");
		query.include("tenant");

		return query.first().then((dt) => {
			let detailData = {
				name: dt.get("name"),
				desc: dt.get("description"),
				owner: dt.get("owner").get("first_name"),
				price: dt.get("price"),
			};

			bookingsQuery.equalTo("room", {
				__type: "Pointer",
				className: "Room",
				objectId: room_id
			});
			bookingsQuery.include("tenant");

			return bookingsQuery.find().then(bookings => {
				for (let booking of bookings) {
					let bookingData = {
						tenant: booking.get("tenant").get("first_name"),
						checkIn: booking.get("start_date"),
						interval: booking.get("interval")
					};
					bookingList.push(bookingData);
				}
				roomData.detail = detailData;
				roomData.bookings = bookingList;
				return roomData;
			});
		});
	}

	public getOwnerBookingList() {
		let user = Parse.User.current().toPointer();

		let booking = Parse.Object.extend("Booking");
		let bookingsQuery = new Parse.Query(booking);

		let room = Parse.Object.extend("Room");
		let query = new Parse.Query(room);

		let bookingList = [];

		query.include("owner");
		query.equalTo("owner", {
			__type: "Pointer",
			className: "_User",
			objectId: user.objectId
		});

		bookingsQuery.include("room");
		bookingsQuery.include("tenant");
		bookingsQuery.include("room.owner");
		bookingsQuery.matchesQuery("room", query);

		return bookingsQuery.find().then(bookings => {
			console.log(bookings);
			for (let booking of bookings) {
				let tenant = booking.get("tenant");
				let bookingData = {
					tenant: tenant.get("first_name"),
					checkIn: booking.get("start_date"),
					stayTime: booking.get("interval")
				};
				bookingList.push(bookingData);
			}
			return bookingList;
		});
	}

	public getBookingList() {
		console.log("masuk Parse service, get booking list")
		let user = Parse.User.current();
		let order = Parse.Object.extend("Order");
		let orderQuery = new Parse.Query(order);
		let bookingList = [];
		orderQuery.equalTo("booker", {
			__type: "Pointer",
			className: "_User",
			objectId: user.id
		});
		orderQuery.include("class");
		orderQuery.include("class.property");
		orderQuery.include("class.property.owner");
		return orderQuery.find().then(orders => {
			let bookingPromise = [];
			let orderList = [];

			console.log(JSON.stringify(orders));
			console.log("don print json stringify");
			var ix = 0;
			for (let order of orders) {
				console.log("get " + ix++);
				let orderData = {
					id: order.id,
					totalPrice: order.get("totalPrice"),
					uniqueCode: order.get("uniqueCode"),
					propertyName: order.get("class").get("property").get("name"),
					location: order.get("class").get("property").get('location'),
					propertyTypeName: this.getPropertyName(order.get("class").get("property").get("type")),
					owner: this.getPropertyName(order.get("class").get("property").get("owner").get("username")),
					discountRate: order.get("class").get("discountRate"),
					transitPrice: order.get("class").get("transitPrice"),
					className: order.get("class").get("name"),
					price: order.get("class").get("pricing"),
					price24: order.get("class").get("pricing24"),
					checkIn: order.get("start_date"),
					type: order.get("type"),
					checkOut: order.get("end_date"),
					interval: order.get("interval"),
					unitQty: order.get("unitBooked"),
					thumbnail: order.get("class").get("property").get("thumbnail") ? order.get("class").get("property").get("thumbnail")._url : "assets/images/Placeholder.png",
					statusCode: order.get("statusCode"),
					status: this.getStatusName(order.get("statusCode")),
					transfer: order.get("transfer") ? order.get("transfer")._url : undefined,
					orderData: order.get("orderData") ? order.get("orderData") : undefined,
					displayAddress: order.get("class").get("property").get('displayAddress') ? order.get("class").get("property").get('displayAddress') : order.get("class").get("property").get("address"),
					priceList: order.get("priceList"),
					orderExpiry: order.get("orderExpiry")
				};
				orderList.push(orderData);
				console.log("ok" + ix);
				// console.log(orderList)
			}
			console.log("finish parse service get booking list !!");
			return orderList;
		});
	}

	getStatusName(code) {
		switch (code) {
			case 0: {
				return 'WAITING_FOR_PAYMENT'
			}
			case 1: {
				return 'LOADING_PAYMENT'
			}
			case 2: {
				return 'TRANSACTION_COMPLETE'
			}
			default:
				return 'Undefined'
		}
	}

	getPropertyName(code) {
		switch (code) {
			case 0: {
				return 'Hotel'
			}
			default:
				return 'Other'
		}
	}

	getStayingType(code) {
		switch (code.toString()) {
			case '0':
				return 'Transit'
			case '1':
				return '24 Hours'
			case '2':
				return '1 Night'
			default:
				return 'Other'
		}
	}

	getCategoryName(code) {
		switch (code) {
			case '0':
				return 'B&B'
			case '1':
				return 'Hostel'
			case '2':
				return 'Apartment'
			case '3':
				return 'Resort'
			case '4':
				return 'Homestay'
			case '5':
				return 'Hotel'
			case '6':
				return 'Villa'
		}
	}

	getRoomType(code) {
		switch (+code) {
			case 0: {
				return 'Transit'
			}
			case 1: {
				return '24 hours'
			}
			case 2: {
				return '1 Night'
			}
			default:
				return 'Others'
		}
	}

	public getLiveBooking() {
		let user = Parse.User.current();
		let order = Parse.Object.extend("Order");
		let orderQuery = new Parse.Query(order);
		let bookingList = [];
		console.log(user.id)
		orderQuery.equalTo("booker", {
			__type: "Pointer",
			className: "_User",
			objectId: user.id
		});
		orderQuery.include("class")
		orderQuery.include("class.property")
		return orderQuery.subscribe()
	}

	public getBookingDetails(booking_id) {
		let booking = Parse.Object.extend("Booking");
		let query = new Parse.Query(booking);
		console.log(booking_id);
		query.include("room");
		query.include("room.owner");
		query.equalTo("room", {
			__type: "Pointer",
			className: "Room",
			objectId: booking_id
		});

		return query.first().then((dt) => {
			let room = dt.get("room");
			let detailData = {
				name: room.get("name"),
				desc: room.get("description"),
				owner: room.get("owner").get("first_name"),
				checkIn: dt.get("start_date"),
				interval: dt.get("interval")
			};
			return detailData
		})
	}

	public getTenantDetails(room_id) {
		let room = Parse.Object.extend("Room");
		let query = new Parse.Query(room);
		console.log(room_id);
		query.equalTo("objectId", room_id);
		query.include("tenant");

		return query.first().then((dt) => {
			let tenantData = {
				tenant: dt.get("tenant").get("first_name"),
				checkIn: dt.get("start_date"),
				interval: dt.get("interval")
			};
			console.log(tenantData);
			return tenantData
		})
	}

	public searchProperties(params, opt ?) {
		let now = moment().startOf('minute');
		let startDate = moment(params.checkIn).startOf('minute');
		let cntDatePerPage = GlobalConfigurationService.CNT_DATA_PER_PAGE;
		let endDate
		if (params.mode == 0) {
			endDate = startDate.clone().add(+params.duration + 1, 'h')
		}
		if (params.mode == 1) {
			endDate = startDate.clone().add(25, 'h')
		}
		if (params.mode == 2) {
			endDate = startDate.clone().add(+params.duration + 1, 'd')
		}
		let property = Parse.Object.extend("Property");
		let query = new Parse.Query(property);

		let lat = params.location.geometry.location.lat();
		let lng = params.location.geometry.location.lng();
		let propertyList = [];
		let geoPoint = new Parse.GeoPoint({
			latitude: lat,
			longitude: lng
		});
		let guestLimit = Math.ceil(params.guest / params.room)

		query.include('owner');
		query.withinKilometers("location", geoPoint, +params.radius);
		query.equalTo('isSearchable', true)
		query.ascending(['category', 'id']);
		query.skip((params.pageno * cntDatePerPage));
		query.limit(cntDatePerPage);

		if (opt !== undefined) {
			if (opt.filterOpt !== undefined) {
				let arr = []

				// If opt.filterOpt undefined, then search all the categories
				if (opt.filterOpt.length == 0) {
					arr = ['0', '1', '2', '3', '4', '5', '6']
				} else {

					// If filter opt available, filter the search only from selected categories
					for (let asd of opt.filterOpt) {
						arr.push(asd.toString())
					}
				}
				query.containedIn('category', arr)
			}
		}

		return query.find().then((result) => {
			//Query for finding property data
			let promises = [];

			for (let property of result) {

				let propertyData = {
					id: property.id,
					owner: property.get('owner') ? property.get('owner').get('username') : 'undefined',
					address: property.get('address'),
					displayAddress: property.get('displayAddress'),
					description: property.get('description'),
					descriptionINA: property.get('descriptionINA'),
					amenities: property.get('amenities'),
					name: property.get('name'),
					gallery: property.get("images"),
					thumbnail: property.get("thumbnail") ? property.get("thumbnail")._url : "assets/images/Placeholder.png",
					type: property.get('type'),
					location: property.get('location'),
					category: this.getCategoryName(property.get('category')),
					rules: property.get("rules"),
					rulesINA: property.get("rulesINA"),
					cancellationPolicy: property.get("cancellationPolicy"),
					cancellationPolicyINA: property.get("cancellationPolicyINA"),
					paymentPolicy: property.get("paymentPolicy"),
					paymentPolicyINA: property.get("paymentPolicyINA"),
					rating: property.get('ratingStar'),
					classes: [],
					availableClass: 0,
					distance: (property.get("location").kilometersTo(geoPoint)).toFixed(2),
					checkIn: property.get("checkIn"),
					checkOut: property.get("checkOut"),
				};

				let classArr = [];
				let classRelation = property.relation('classList');

				promises.push(
					//Query for finding class data inside property
					classRelation.query().greaterThanOrEqualTo('guestPerUnit', guestLimit).find().then(classes => {
						let promisesClass = [];

						for (let data of classes) {
							let classData: any = {
								id: data.id,
								name: data.get('name'),
								price: data.get('pricing'),
								pricing24: data.get('pricing24'),
								description: data.get('description'),
								deposit: data.get('deposit'),
								gallery: data.get('photos'),
								thumbnail: data.get('thumbnail') ? data.get('thumbnail')._url : 'assets/images/Placeholder.png',
								unitCapacity: data.get('guestPerUnit'),
								priceList: data.get('transitPrice'),
								basicFacilities: data.get('basicFacilities'),
								roomOverview: data.get('roomOverview'),
								roomFacilities: data.get('roomFacilities'),
								bathroomAmenities: data.get('bathroomAmenities'),
								otherFacilities: data.get('otherFacilities'),
								discountRate: data.get('discountRate'),
								units: [],
								availableUnits: 0
							};
							let unitRelation = data.relation('unitList');
							let unitArr = []

							promisesClass.push(
								//Query for finding unit data inside class
								unitRelation.query().equalTo("isHidden", false).find().then(units => {
									let promisesUnit = [];
									let booking = Parse.Object.extend("Booking")

									for (let unit of units) {
										let bookingsQuery = new Parse.Query(booking)

										let unitData = {
											id: unit.id,
											name: unit.get('name')
										}

										//Check in bookings if there are units with booking
										bookingsQuery.equalTo("unit", {
											__type: "Pointer",
											className: "Unit",
											objectId: unitData.id
										});
										bookingsQuery.include("order")

										//check in bookings if startDate or endDate available
										bookingsQuery.greaterThan("true_end_date", startDate.toDate())
										bookingsQuery.lessThan("start_date", endDate.toDate())
										bookingsQuery.lessThan("orderExpiry", endDate.toDate())

										promisesUnit.push(
											bookingsQuery.find(dt => {
												//Query for finding bookings for particular unit
												let bookings = []

												for (let booking of dt) {
													console.log(startDate.toDate() + "\n" + endDate.toDate() + "\n" + classData.name + "\n" + booking)
													let statusCode = booking.get("order").get("statusCode")
													if (+statusCode != 4 && +statusCode != 3 && +statusCode != 2) {
														bookings.push(booking)
													}

												}
												if (bookings.length == 0) {
													//if no bookings, get unit data
													unitArr.push(unitData);
												}


											})
										)
									}

									return Parse.Promise.when(promisesUnit).then(result => {

										classData.units = unitArr
										classData.availableUnits = unitArr.length

										if (classData.availableUnits >= params.room) {
											classArr.push(classData)
										}

										propertyData.classes = classArr
										propertyData.availableClass = classArr.length

									}, err => {
										console.log(err)
									})
								})
							)
						}

						return Parse.Promise.when(promisesClass).then(result => {
							if (propertyData.availableClass > 0) {
								propertyList.push(propertyData)
							}
						}, err => {
							console.log(err)
						})
					})
				)
			}

			return Parse.Promise.when(promises).then(result => {
				return propertyList
			});
		}, err => {
			console.log(err)
		})
	}

	public bookRoom(data) {
		let startDate = moment(data.checkIn).startOf('minute')
		// let now = moment(new Date())
		let endDate
		let trueEndDate

		let hourIn = moment(data.propDetail.checkIn).get('hour')
		let minuteIn = moment(data.propDetail.checkIn).get('minute')

		let hourOut = moment(data.propDetail.checkOut).get('hour')
		let minuteOut = moment(data.propDetail.checkOut).get('minute')

		console.log(hourIn, minuteIn, hourOut, minuteOut)

		if (data.mode == 0) {
			endDate = startDate.clone().add(+data.duration, 'h')
			trueEndDate = endDate.clone().add(1, 'h')
		}

		if (data.mode == 1) {
			endDate = startDate.clone().add(24, 'h')
			trueEndDate = endDate.clone().add(1, 'h')
		}

		if (data.mode == 2) {
			//Using today date but using hotel check in and check out time
			startDate = startDate.startOf("day").add(hourIn, 'h').add(minuteIn, 'm')
			endDate = startDate.clone().startOf("day").add(+data.duration, 'd').add(hourOut, 'h').add(minuteOut, 'm')
			trueEndDate = endDate.clone().add(1, 'h')
			console.log(startDate.toDate() + "\n" + endDate.toDate())
		}

		let bookingList = [];
		let newContactList = [];

		let user = Parse.User.current();

		let order = new Parse.Object("Order");

		let relation = order.relation('bookings');
		let i = 0

		let userEmail = user.get('username');
		let relUserContact = user.relation('contact_list');
		let newUserContact = new Parse.Object("UserContact");
		newUserContact.set("contact_name", data.orderData.fullName);
		newUserContact.set("contact_name_src", data.orderData.fullName.toLowerCase());
		newUserContact.set("contact_email", data.orderData.email);
		newUserContact.set("contact_email_src", data.orderData.email.toLowerCase());
		newUserContact.set("contact_phone", data.orderData.phoneNo);
		newUserContact.set("user", {
			__type: "Pointer",
			className: "_User",
			objectId: user.id
		});
		newContactList.push(newUserContact);

		let existsUserContact = new Parse.Object.extend("UserContact");
		let queryExistsUserContact = new Parse.Query(existsUserContact);
		queryExistsUserContact.equalTo("contact_name_src", data.orderData.fullName.toLowerCase());
		queryExistsUserContact.equalTo("contact_phone", data.orderData.phoneNo);
		queryExistsUserContact.equalTo("contact_email_src", data.orderData.email.toLowerCase());

		order.set("booker", user)
		order.set("class", {
			__type: "Pointer",
			className: "PropertyClass",
			objectId: data.id
		})

		if (+data.mode == 2)
			order.set("totalPrice", ((data.price * ((100 - data.discountRate)/100) ) * data.roomQty) - data.uniqueCode);
		if (+data.mode == 1) {
			order.set("totalPrice", data.pricing24)
		}
		if (+data.mode == 0) {
			order.set("totalPrice", data.priceList[+data.duration - 1].price * ((100 - data.discountRate) / 100) * data.roomQty - data.uniqueCode)
		}
		order.set("interval", +data.duration)
		order.set("start_date", startDate.toDate())
		order.set("end_date", endDate.toDate())
		order.set("true_end_date", trueEndDate.toDate())
		order.set("unitBooked", +data.roomQty)
		order.set("statusCode", 0)
		order.set("type", +data.mode)
		order.set("orderData", data.orderData)
		order.set("uniqueCode", data.uniqueCode)
		order.set("orderExpiry", moment().add(30, 'm').toDate())

		for (let unit of data.units) {
			if (i < data.roomQty) {
				let booking = new Parse.Object("Booking");
				booking.set("unit", {
					__type: "Pointer",
					className: "Unit",
					objectId: data.units[i++].id
				});
				booking.set("interval", +data.duration)
				booking.set("start_date", startDate.toDate())
				booking.set("end_date", endDate.toDate())
				booking.set("true_end_date", trueEndDate.toDate())
				booking.set("tenant", user)
				booking.set("type", +data.mode)
				booking.set("orderExpiry", moment().add(30, 'm').toDate())
				booking.set("order", {
					__type: "Pointer",
					className: "Order",
					objectId: order.id
				})
				bookingList.push(booking)
			}
		}

		return Parse.Object.saveAll(bookingList).then(success => {
			relation.add(bookingList);
			queryExistsUserContact.find().then((contacts) => {
				if (contacts.length == 0) {
					Parse.Object.saveAll(newContactList).then(success => {
						relUserContact.add(newContactList);
						user.save().then(success => {

							console.log(success);
						}, err => {
							console.log(err);
						});
					}, error => {
						console.log('add user contact error');
						console.log(error);
					});
				}
			}, error => {
				console.log('check user exist error');
				console.log(error);
			});

			return order.save().then(success => {
				// console.log("success order save");
				// console.log(JSON.stringify(success));
				// console.log(order.id);
				this.bookedRoomOrderId = order.id;

				for (let booking of bookingList) {
					booking.set("order", {
						__type: "Pointer",
						className: "Order",
						objectId: order.id
					})
				}
				return Parse.Object.saveAll(bookingList).then(success => {
					console.log('success')
				}, error => {
					console.log(error)
				})
			}, error => {
				console.log(error)
			})
		}, error => {
			console.log(error)
		})
	}

	public sendEmail(data, mode) {
		console.log("Masuk send email", data, mode)
		let user = Parse.User.current();
		let userEmail = user.get('username')
		let emails

		let totalPrice
		if (+data.mode == 2)
			totalPrice = ((data.price * ((100 - data.discountRate)/100) ) * data.roomQty) - data.uniqueCode;
		if (+data.mode == 0)
			totalPrice = data.priceList[+data.duration - 1].price * ((100 - data.discountRate) / 100) * data.roomQty - data.uniqueCode

		let subsTag = '{'
		let subsEndTag = '}'

		console.log("log 2")

		if (mode == "bookingPlacement") {
			const bookingPlacedEmails = [{
				to: data.orderData.email,
				from: "no-reply@klikpegi.com",
				subject: "[klikpegi.com] Room Booking",
				substitutions: {
					'url': data.thumbnail,
					'property_name': data.propName,
					'room_type': data.name,
					'check_in': data.checkIn,
					'check_out': data.checkOut.toDate()
				},
				templateId: "94066132-d9a6-4c5f-87a1-82176fbda252"
			}, {
				to: 'cs@klikpegi.com',
				cc: 'info@klikpegi.com',
				from: "no-reply@klikpegi.com",
				subject: "[klikpegi.com] Booking Placed",
				substitutions: {
					'booking_ID': data.id,
					'property_name': data.propName,
					'property_type': data.propDetail.roomType,
					'room_type': data.name,
					'room_qty': data.roomQty,
					'total_price': totalPrice
				},
				templateId: "15ef4b53-824f-4c85-a30d-a548e72a2a4b",
			}]
			emails = bookingPlacedEmails
		}
		if (mode == "bookingCancel") {
			const bookingCancelEmails = [{
				to: data.orderData.email,
				from: "no-reply@klikpegi.com",
				subject: "[klikpegi.com] Booking Cancelled",
				substitutions: {
					'url': data.thumbnail,
					'property_name': data.propertyName,
					'room_type': data.className,
					'check_in': data.checkIn,
					'check_out': data.checkOut
				},
				templateId: "e0789d21-80f7-4adf-a844-f2d8e916ccd5"
			}, {
				to: 'cs@klikpegi.com',
				cc: 'info@klikpegi.com',
				from: "no-reply@klikpegi.com",
				subject: "[klikpegi.com] Booking Cancelled",
				substitutions: {
					'booking_ID': data.id,
					'property_name': data.propName,
					'property_type': this.getRoomType(data.type),
					'room_type': data.name,
					'room_qty': data.roomQty,
					'total_price': data.totalPrice,
					'check_in': data.checkIn,
					'check_out': data.checkOut
				},
				templateId: "3027d00c-e90f-4df1-af64-552d3379580d",
			}]
			emails = bookingCancelEmails
		}
		if (mode == "paymentCompleted") {
			console.log("log 3")

			const paymentCompletedEmails = [{
				to: data.orderData.email,
				from: "no-reply@klikpegi.com",
				subject: "[klikpegi.com] Payment Completed",
				substitutions: {
					'url': data.thumbnail,
					'property_name': data.propertyName,
					'room_type': data.className,
					'check_in': data.checkIn,
					'check_out': data.checkOut
				},
				templateId: "b3d32844-447a-400f-b372-8e4c291f2742"
			}, {
				to: 'cs@klikpegi.com',
				cc: 'info@klikpegi.com',
				from: "no-reply@klikpegi.com",
				subject: "[klikpegi.com] Payment Completed",
				substitutions: {
					'booking_ID': data.id,
					'property_name': data.propertyName,
					'property_type': data.propertyTypeName,
					'room_type': data.className,
					'room_qty': data.unitQty,
					'total_price': data.totalPrice,
					'check_in': data.checkIn,
					'check_out': data.checkOut
				},
				templateId: "07ad9b45-1d86-4684-a080-8dcf32ba7c8e",
			}]
			console.log("log 4")

			emails = paymentCompletedEmails
		}

		console.log("log 5")
		console.log('email mode', data, mode, emails)

		return Parse.Cloud.run("sendMail", {
			msg: emails,
			subsTag: subsTag,
			subsEndTag: subsEndTag
		}).then(success => {
			console.log('multiple email sent')
		}, err => {
			console.log('failed to send', err)
		})

	}

	public cancelBooking(id) {
		let user = Parse.User.current();
		let order = Parse.Object.extend("Order");
		let orderQuery = new Parse.Query(order);
		let bookingList = [];
		orderQuery.equalTo("booker", {
			__type: "Pointer",
			className: "_User",
			objectId: user.id
		});
		orderQuery.equalTo("objectId", id)
		return orderQuery.first().then(data => {
			data.set("statusCode", 4)
			return data.save().then(success => {
				console.log(success)
			}, err => {
				console.log(err)
			})
		})
	}

	public addRoom(roomData) {
		let user = Parse.User.current().toPointer();
		let room = new Parse.Object("Room");
		let location = new Parse.GeoPoint({
			latitude: roomData.location.lat,
			longitude: roomData.location.lng
		});
		console.log(location);
		console.log(roomData);
		room.set("owner", user);
		room.set("name", roomData.room_name);
		room.set("description", roomData.room_description);
		room.set("price", roomData.room_price);
		room.set("location", location);

		return room.save().then((success) => {
			console.log(success)
		}, (err) => {
			console.log(err)
		})
	}

	/* User Account Management Module */
	public existingCheck(username) {
		console.log('parse existing user check');

		let user = Parse.Object.extend('User');
		let query = new Parse.Query(user);

		query.equalTo('username', username);
		return query.first().then(user => {
			if (user != undefined) {
				console.log('parse user exist');
				let userData = {
					fbAuth: user.get('fbAuth'),
					googleAuth: user.get('googleAuth')
				}
				return userData;
			} else {
				console.log('parse user not exist');
				return null;
			}
		}, err => {
			console.log(err);
			return null;
		});
	}

	public signup(authData, pwd, method) {
		console.log('parse signup');

		let user = new Parse.User();
		user.set('username', authData.email);
		user.set('password', pwd);

		if (method == 'manual') {
			console.log('parse signup manual');
			user.set('email', authData.email);
			user.set('name', authData.fullName);
			user.set('fullName', authData.fullName);
			user.set('phone_number', authData.phoneNo);
		} else if (method == 'google') {
			console.log('parse signup google');
			user.set('googleAuth', pwd);
			user.set('name', authData.displayName);
			user.set('email', authData.email);
			user.set('first_name', authData.givenName);
			user.set('last_name', authData.familyName);
		} else if (method == 'facebook') {
			console.log('parse signup facebook');
			user.set('fbAuth', pwd);
			user.set('name', authData.fullName);
			user.set('email', authData.email);
			user.set('fullName', authData.fullName);
			user.set('first_name', authData.first_name);
			user.set('last_name', authData.last_name);
			user.set('gender', authData.gender);
			user.set('birthDate', authData.birthDate);
		}

		return user.signUp(null).then(success => {
			return success;
		}, err => {
			return err;
		});
	}

	public login(username, pwd) {
		console.log('parse login');

		return Parse.User.logIn(username, pwd).then(success => {
			console.log('Login berhasil', success);
			return 'success';
		}, err => {
			console.log('Login failed', err);
			return 'error';
		});
	}

	public facebookInit() {
		let fbParams: InitParams = {
			appId: this.globalConfig.facebookAppId,
			xfbml: true,
			version: 'v2.9'
		};

		return Parse.FacebookUtils.init(fbParams)
	}

	public facebookLogin(authData) {
		return Parse.FacebookUtils.logIn(authData, {
			success: function (user) {
				if (!user.existed()) {
					console.log("User signed up and logged in through Facebook!");
				} else {
					console.log("User logged in through Facebook!");
				}
				return user;
			},
			error: function (user, error) {
				return error;
			}
		});
	}

	public existingLinking(username, pwd, existingCheckData, method) {
		console.log('parse linking');

		let user = new Parse.Object.extend('User');
		let query = new Parse.Query(user);

		query.equalTo('username', username);
		return query.first().then(data => {
			if (method == 'manual') {
				console.log('Link Manual account to existing account');
				data.set('password', pwd);
				if (existingCheckData.googleAuth != undefined) data.set('googleAuth', pwd);
				if (existingCheckData.fbAuth != undefined) data.set('fbAuth', pwd);
			} else if (method == 'google') {
				console.log('Link Google account to existing account');
				data.set('googleAuth', pwd);
			} else if (method == 'facebook') {
				console.log('Link Facebook account to existing account');
				data.set('fbAuth', pwd);
			}

			return data.save().then(success => {
				console.log(success);
				return 'Linking success';
			}, err => {
				console.log(err);
				return 'Linking error';
			});
		});
	}

	public logoutUser() {
		return Parse.User.logOut();
	}

	public forgotPassword(email) {
		return Parse.User.requestPasswordReset(email);
	}

	public editPassword(password) {
		let user = Parse.User.current();
		user.setPassword(password);
		return user.save().then(success => {
			console.log(success);
		}, err => {
			console.log(err);
		});
	}

	/* User Account Management Module */

	public editProfile(data) {
		let user = Parse.User.current();
		let userPointer = user.toPointer();
		let phoneNumber = +data.phoneNo
		console.log(userPointer);
		let query = new Parse.Query(user);
		query.equalTo("objectId", userPointer.objectId);
		return query.first().then((userDetail) => {
			userDetail.set("fullName", data.fullName);
			userDetail.set("phone_number", phoneNumber);
			userDetail.set("email", data.email);
			return userDetail.save().then(success => {
				console.log(success)
			})
		})
	}

	public uploadImage(id, image, filename) {
		console.log("id", id)
		console.log("image", image)
		let order = Parse.Object.extend("Order");
		let query = new Parse.Query(order)
		let ParseFile = new Parse.File(filename, {
			base64: image
		})

		query.equalTo("objectId", id)
		return ParseFile.save().then(success => {
			console.log(success);
			return query.first().then(data => {
				data.set("statusCode", 1);
				data.set("transfer", success);
				return data.save().then(success => {
					console.log(success);
				}, error => {
					console.log(error);
				});
			});
		});

		// let fileTransfer: TransferObject = this.transfer.create()
		// let options: FileUploadOptions = {
		//   fileKey: 'file',
		//   fileName: 'image.jpg',
		// }
	}

	public confirmPayment(id) {
		let order = Parse.Object.extend("Order");
		let query = new Parse.Query(order);

		query.equalTo("objectId", id);

		return query.first().then(order => {
			order.set("statusCode", 1);
			return order.save().then(success => {
				console.log(success);
			});
		});
	}
}
