//               الاسم الكامل
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="الاسم الكامل"
//               className="w-full rounded-md text-end  text-secondary-content  bg-secondary py-3 px-6 text-base font-medium  placeholder:text-secondary-content focus:placeholder:opacity-20 outline-none  focus:shadow-md"
//             />
//           </div>
//           <div className="mb-5">
//             <label
//               htmlFor="email"
//               className="mb-3 block text-base font-medium text-accent opacity-70"
//             >
//               البريد الإلكتروني
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="example@domain.com"
//               className="w-full rounded-md text-end  text-secondary-content bg-secondary py-3 px-6 text-base font-medium placeholder:text-secondary-content  focus:placeholder:opacity-20 outline-none  focus:shadow-md"
//             />
//           </div>
//           <div className="mb-5">
//             <label
//               htmlFor="subject"
//               className="mb-3 block text-base font-medium text-accent opacity-70"
//             >
//               الطلب
//             </label>
//             {/* <input
//               type="text"
//               name="subject"
//               id="subject"
//               placeholder="اكتب الطلب هنا"
//               className="w-full rounded-md text-end text-secondary-content bg-secondary py-3 px-6 text-base font-medium  focus:placeholder:opacity-20 placeholder:text-secondary-content outline-none  focus:shadow-md"
//             /> */}
//             <select className="select select-secondary w-full max-w-xs text-end text-secondary-content bg-secondary rounded-md ">
//               <option disabled value={"اختر الطلب"}>
//                 اختر الطلب
//               </option>
//               <option>الحصول على إجازة في القراءات</option>
//               <option>تحفيظ القرآن الكريم</option>
//               <option>تعلم تجويد القرآن</option>
//               <option>دورات في العلوم الشرعية</option>
//               <option>تأسيس علوم شرعية للمبتدئين</option>
//               <option>تأسيس القراءة للمبتدئين</option>
//               <option>تأسيس النحو للمبتدئين</option>
//               <option>دورات في النحو والصرف</option>
//               <option>دورات في البلاغة</option>
//             </select>
//           </div>
//           <div className="mb-5">
//             <label
//               htmlFor="message"
//               className="mb-3 block text-base font-medium text-accent opacity-70"
//             >
//               الرسالة
//             </label>
//             <textarea
//               rows={4}
//               name="message"
//               id="message"
//               placeholder="اكتب رسالتك هنا"
//               className="w-full resize-none text-end rounded-md text-secondary-content bg-secondary py-3 px-6 text-base font-medium  focus:placeholder:opacity-20 placeholder:text-secondary-content outline-none  focus:shadow-md"
//             ></textarea>
//           </div>
//           <div>
//             <button className="btn btn-primary">ارسل</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import useWindowWidth from "../Hooks/useWindowSize";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      service: "",
      country: "",
      terms: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "name must be 20 charracters or less.")
        .required("please enter your name."),
      email: Yup.string().email("Invalid email address").required("Required"),
      service: Yup.string().required("please select a service."),
      country: Yup.string().required("please enter your country."),
      terms: Yup.string().required("terms must be accepted."),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div
      id="contact"
      className="h-[100dvh] flex flex-col items-center justify-center"
    >
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex lg:flex-row flex-col rounded-lg w-full lg:w-3/4 lg:h-3/4 h-[100%] relative"
      >
        <div className="text-gray-700 p-6 lg:p-20  lg:px-10 z-10">
          <h1 className="text-3xl pb-2">lets get started</h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            voluptates nobis veritatis! In ipsam quas nihil iure a cupiditate
            quia.
          </p>
          <div className="mt-6 lg:flex lg:gap-5">
            <div>
              {/* name */}
              <div className="pb-4">
                <label
                  className={`block text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="name"
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "الاسم"}
                </label>
                <input
                  className="border-2 bg-white input border-secondary p-2 rounded-md w-full   focus:border-primary focus:outline-none focus:ring-2 "
                  type="text"
                  name="name"
                  placeholder="قم بادخال الاسم "
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>{" "}
              {/* email */}
              <div className="pb-4">
                <label
                  className={`block text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "الايميل"}
                </label>
                <input
                  className="border-2 bg-white input border-secondary p-2 rounded-md w-full  focus:border-primary focus:outline-none focus:ring-2 "
                  type="text"
                  name="email"
                  placeholder="قم بادخال الايميل"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* country */}
              <div className="pb-4">
                <label
                  className={`block text-sm pb-2 ${
                    formik.touched.country && formik.errors.country
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="country"
                >
                  {formik.touched.country && formik.errors.country
                    ? formik.errors.country
                    : "الدولة"}
                </label>
                <input
                  className="border-2 bg-white input border-secondary p-2 rounded-md w-full   focus:border-primary focus:outline-none focus:ring-2 "
                  type="text"
                  name="country"
                  placeholder="قم بادخال الدولة"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div>
              {/* service */}
              <div className="pb-4">
                <label
                  className={`block text-sm pb-2 ${
                    formik.touched.service && formik.errors.service
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="service"
                >
                  {formik.touched.service && formik.errors.service
                    ? formik.errors.service
                    : "قم باختيار الطلب"}
                </label>
                <select
                  name="service"
                  className="border-2 select bg-white input border-secondary p-2 rounded-md w-full   focus:border-primary focus:outline-none focus:ring-2 "
                  value={formik.values.service}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option disabled value={"اختر الطلب"}>
                    اختر الطلب
                  </option>
                  <option>إجازة في القراءات</option>
                  <option>تحفيظ القرآن الكريم</option>
                  <option>تعلم تجويد القرآن</option>
                  <option>دورات في العلوم الشرعية</option>
                  <option>تأسيس علوم شرعية للمبتدئين</option>
                  <option>تأسيس القراءة للمبتدئين</option>
                  <option>تأسيس النحو للمبتدئين</option>
                  <option>دورات في النحو والصرف</option>
                  <option>دورات في البلاغة</option>
                </select>
              </div>
              {/* terms of service */}
              <div className="pb-4">
                <label
                  className={`block text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-400"
                      : ""
                  }`}
                  htmlFor="terms"
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of service"}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox border-secondary checkbox-primary p-2 focus:border-primary focus:outline-none focus:ring-2"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                  />
                  <p className="text-sm p-3">اوافق على الشروط والاحكام</p>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-secondary btn-wide text-secondary-content  lg:mt-7"
              >
                ارسال
              </button>
            </div>
          </div>
        </div>

        <div className="flex ">
          <Image
            src="/book.svg"
            alt="contact"
            width={600}
            height={600}
            className="p-12 max-lg:absolute top-1/4 max-lg:opacity-5  static "
          />
        </div>
      </form>
    </div>
  );
}
