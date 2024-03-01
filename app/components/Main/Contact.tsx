import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form
          action="https://formbold.com/s/FORM_ID"
          method="POST"
          className="text-end "
        >
          <div className="mb-5 ">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-accent opacity-70"
            >
              الاسم الكامل
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="الاسم الكامل"
              className="w-full rounded-md text-end  text-secondary-content  bg-secondary py-3 px-6 text-base font-medium  placeholder:text-secondary-content focus:placeholder:opacity-20 outline-none  focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-accent opacity-70"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md text-end  text-secondary-content bg-secondary py-3 px-6 text-base font-medium placeholder:text-secondary-content  focus:placeholder:opacity-20 outline-none  focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-accent opacity-70"
            >
              الطلب
            </label>
            {/* <input
              type="text"
              name="subject"
              id="subject"
              placeholder="اكتب الطلب هنا"
              className="w-full rounded-md text-end text-secondary-content bg-secondary py-3 px-6 text-base font-medium  focus:placeholder:opacity-20 placeholder:text-secondary-content outline-none  focus:shadow-md"
            /> */}
            <select className="select select-secondary w-full max-w-xs">
              <option disabled selected>
                اختر اللخدمة
              </option>
              <option>الحصول على إجازة في القراءات</option>
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
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-accent opacity-70"
            >
              الرسالة
            </label>
            <textarea
              rows={4}
              name="message"
              id="message"
              placeholder="اكتب رسالتك هنا"
              className="w-full resize-none text-end rounded-md text-secondary-content bg-secondary py-3 px-6 text-base font-medium  focus:placeholder:opacity-20 placeholder:text-secondary-content outline-none  focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="btn btn-primary">ارسل</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
