// "use client";
// import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic"; // Dynamically import Sidebar to disable SSR
// import Navbar from "./Navbar";
// import supabase from "@/config/supabaseClient";

// const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false }); // Disable SSR for Sidebar

// const Page = () => {
//   const [contacts, setContacts] = useState([]);

//   console.log('contacts', contacts)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data, error } = await supabase.from("contacts").select("*");

//         if (error) {
//           console.error("Error fetching data:", error);
//           return;
//         }

//         setContacts(data);
//       } catch (err) {
//         console.error("Unexpected Error:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Navbar />
//         <div className="flex-1 p-4 bg-gray-100">
//           <h2 className="text-xl font-semibold">Contacts List</h2>
//           <ul className="mt-2 space-y-2">
//             {contacts.length > 0 ? (
//               contacts.map((contact) => (
//                 <li key={contact.id} className="p-3 bg-white shadow rounded">
//                   <p className="font-medium">{contact.name}</p>
//                   <p className="text-gray-600">{contact.email}</p>
//                 </li>
//               ))
//             ) : (
//               <p className="text-gray-500">No contacts found.</p>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Dynamically import Sidebar to disable SSR
import Navbar from "./Navbar";
import supabase from "@/config/supabaseClient";
import Link from "next/link";

const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false }); // Disable SSR for Sidebar

const Page = () => {
  const [contacts, setContacts] = useState([]);

  console.log('contacts', contacts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("contacts").select("*");

        if (error) {
          console.error("Error fetching data:", error);
          return;
        }

        setContacts(data);
      } catch (err) {
        console.error("Unexpected Error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-4 bg-gray-100">
          <h2 className="text-xl font-semibold">Contacts List</h2>
          <ul className="mt-2 space-y-2">
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <li key={contact.id} className="p-3  bg-white shadow rounded">
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-gray-600">{contact.email}</p>
                  <p className="text-gray-500">Company: {contact.company}</p>
                  <p className="text-gray-400">
                    Created At: {new Date(contact.created_at).toLocaleString()}
                  </p>

                  {contact.file && (
                    <Link
                      href={`https://hujkionomyjpolwvoznv.supabase.co/storage/v1/object/public/resumes/${contact.file}`}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                      rel="noopener noreferrer"
                    >
                      View Resume (PDF)
                    </Link>
                  )}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No contacts found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
