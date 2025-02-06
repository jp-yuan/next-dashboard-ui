import TableSearch from "@/components/TableSearch"
import Image from "next/image"
import InvoiceForm from "@/components/InoviceForm"
const TeacherListPage = () => {

    return(<div className="bg-white p-4 rounded-md flex-1 m-4">
        {/* TOP */}
        <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semiboald">All Teacher</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
        <TableSearch/>
        <div className="flex itens-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center">
                <Image src="/filter.png" alt="" width={14} height={14}/>
            </button>

            <button className="w-8 h-8 flex items-center justify-center">
                <Image src="/sort.png" alt="" width={14} height={14}/>
            </button>

            <button className="w-8 h-8 flex items-center justify-center">
                <Image src="/plus.png" alt="" width={14} height={14}/>
            </button>
                </div>
            </div>
        </div>
        {/* list */}
        <div className="">
            <InvoiceForm></InvoiceForm>
            </div>  
        {/* pagination */}
        <div className=""></div>              
    </div>
    
)
}

export default TeacherListPage