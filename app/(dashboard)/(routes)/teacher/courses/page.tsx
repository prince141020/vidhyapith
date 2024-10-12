
import { auth } from "@clerk/nextjs/server";
import { columns } from "./_components/column";
import { DataTable } from "./_components/data-table";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";




const CoursesPage = async() => {
  const {userId}=auth();

  if(!userId){
    return redirect("/")
  }

  const courses = await db.course.findMany({
    where:{
      userId,
    },
    orderBy:{
      createAt:"desc",

    },

  })
  return (
    <div className="p-6">
       <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
