/**
 * Created by wiyantotan on 12/14/17.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalConfigurationService {

    public googleWebClientId: string = "893535746-sn72vimijokkcl28to64agqaqug1lg6m.apps.googleusercontent.com";
    public facebookAppId: string = "1948856395186659";
    public defaultLang: string = "id";
    public static SRC_PAYMENT: string = 'KPG';
    public static CLOSE_PAGE_TYPE = {DISMISS_MODAL: 1, RELOAD_ROOT: 2};
    public static GHOURS_LOGO_PATH: string = "assets/images/klikpegi_full.png";
    public static SEARCH_TYPE = {SRC_TRANSIT: 0, SRC_24HOURS: 1, SRC_1NIGHT: 2};
    public static CNT_DATA_PER_PAGE = 10;
    public static SEARCH_MODE_CURRENT: number = 0;
    public static TRUNCATE_WORDS_COUNT = 40;
    public static DEVELOPMENT_MODE: boolean = false;
    public static VERITRANS_DEV_KEY: any = {
        CLIENT_KEY: "SB-Mid-client-96jawtCGS_iRIi8E",
        SERVER_KEY: "SB-Mid-client-96jawtCGS_iRIi8E"
    };
    public static VERITRANS_PROD_KEY: any = {
        CLIENT_KEY: "SB-Mid-client-96jawtCGS_iRIi8E",
        SERVER_KEY: "SB-Mid-client-96jawtCGS_iRIi8E"
    };
    public static GHOURS_PAYMENT_URL: string = "http://www.g-hours.me/demo/payment/method";
    public static IN_APP_BROWSER_OPTIONS: string = "location=no,clearcache=yes,clearsessioncache=yes,footer=no";
    public static PAYMENT_STATUS = {COMPLETE: '1', PENDING: '2', ERROR: '3', NEW: '0'};
    public static KODE_UNIQUE: number = 0;
	public static CURRENCY_SYMBOL: string = "Rp.";
}
