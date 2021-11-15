declare interface wallet {
    accountId:string
    authData:{
        accountId:string,
        allKeys:number[]
    }
    contractId: ""
    getAccountId:any
    init: any
    isSignedIn: any
    onAccountChanged: any
    requestSignIn: any
    signAndSendTransaction: any
    signInSuccess: any
    signOut: any,
    viewFunctionCall: any,
    requestSignTransactions: any
}
declare interface Window {
    wallet: wallet;
    nearConfig:any;
    accountId:string = '';
    walletAccount:wallet;
}
const window: Window & typeof globalThis;