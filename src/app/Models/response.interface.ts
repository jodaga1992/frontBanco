export interface ResponseI<T>
{
    success:boolean;
    message:string;
    codigo:string;
    data:T;
}