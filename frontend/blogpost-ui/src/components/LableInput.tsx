
interface LableInputType {
    lable:string;
    placeholder:string;
    onChange:(e:any)=>void;
    type?:string;
}
export function LableInput({lable,placeholder,onChange,type}:LableInputType){
    return(
        <div className="mt-3">
            <label className="font-bold">{lable}</label><br />
            <input className="border-2 w-80 p-1 mt-1 rounded-md" type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}