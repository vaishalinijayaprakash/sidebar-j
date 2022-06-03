export interface IMenu{
text:string,
icon:string,
routerLink?:string,
children:IMenu[]
}
export interface IMenuItem{
    text:string,
    icon:string,
    routerLink:string;
}