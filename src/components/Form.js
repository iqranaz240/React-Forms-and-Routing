// import React, { useState } from 'react'
// import { getDatabase, ref, set } from "firebase/database";
// import { auth } from '../firebaseConfig';

// export default function Form() {
//     const database = getDatabase();

//     const [product, setProduct] = useState("")
//     const [details, setDetails] = useState("")
//     const [quantity, setQunatity] = useState(0)

//     function handleSubmit(event) {
//         event.preventDefault()
//         // console.log(auth)
//         // console.log(email, password)

//             const db = getDatabase();
//             var productRef = firebaseApp.database().ref("product/");
//             productRef.set({
//                 product: product,
//                 details: details,
//                 quantity: quantity
//             });
//     }

//     return (
//         <div>
//             <h1>Form for database</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>Product:
//                     <input
//                         type="text"
//                         value={product}
//                         onChange={(e) => setProduct(e.target.value)}
//                     />
//                 </label>
//                 <label>Details:
//                     <input
//                         type="text"
//                         value={details}
//                         onChange={(e) => setDetails(e.target.value)}
//                     />
//                 </label>
//                 <label>Quantity:
//                     <input
//                         type="text"
//                         value={quantity}
//                         onChange={(e) => setQunatity(e.target.value)}
//                     />
//                 </label>
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }
