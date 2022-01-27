export interface ResponseI<T>
{
    success:boolean;
    message:string;
    codigo:number;
    data:T;
}