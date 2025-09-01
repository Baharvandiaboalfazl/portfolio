import { Links } from "react-router-dom";
import Image1 from "../../assets/portfolio-1-1.png";
import Image2 from "../../assets/portfolio-1-2.png";
import Image3 from "../../assets/portfolio-2-1.png";
import Image4 from "../../assets/portfolio-2-2.png";

const data = [
  {
    id: 1,
    image: [Image1, Image2, Image3, Image4],
    title: "پروژه پورتفولیو",
    description: `
این وب‌سایت با **React** و **CSS** نوشته شده و هدف اصلی آن، نمایش خلاصه‌ای از معرفی من، تکنولوژی‌هایی که یاد گرفته‌ام و پروژه‌هایی است که ساخته‌ام.
`,
    tags: ["CSS", "React"],
    links: {
      live: "https://baharvandiaboalfazl.github.io/portfolio",
      github: "https://github.com/Baharvandiaboalfazl/portfolio",
    },
  },
  {
    id: 2,
    image: [
      "https://s34.picofile.com/file/8486729234/loading_1_.gif",
      "https://s34.picofile.com/file/8486729268/home_1_.gif",
      "https://s34.picofile.com/file/8486729218/category_1_.gif",
      "https://s34.picofile.com/file/8486729200/articles_1_.gif",
      "https://s34.picofile.com/file/8486729242/about_1_.gif",
      "https://s34.picofile.com/file/8486729226/signin_1_.gif",
      "https://s34.picofile.com/file/8486729192/dashboard_1_.gif",
    ],
    title: "پروژه وبلاگ تکنولوژی",
    description: `
### پروژه تگ لاک

با هدف ایجاد یک وبلاگ با استفاده از تکنولوژی های جدید، خوندن مقاله رو برای کاربر جذاب تر کنه.

###  فرانت اند

* در سمت فرانت اند سایت از **Three JS** استفاده شده تا ابجکت های سه بعدی رو در برنامه رندر کنه؛ این ابجکت ها در صفحه ثبت نام و ورود، لوگو و لودینگ سایت استفاده شده اند.

* از **Motion** استفاده شده تا کامپوننت با انیمیشن نرمی به صفحه کاربر وارد شوند تا تجربه کاربری سایت رو بالا ببرد.

* در این پروژه از کامپوننت های وبسایت <https://ui.aceternity.com/> برای کارت ها، پس زمینه لودینگ و ... استفاده شده.

* از **ریداکس** برای مدیریت استیت ها و گرفتن اطلاعات از api و ارسال درخواست به اون استفاده میشود و در اخر اطلاعات در ریداکس ذخیره میکند.

###  بک اند 

* در سمت بک اند از طریق روت های api دیتا ها در دیتابیس ایجاد و در صورت نیاز خوانده و به فرانت بر میگرداند.

* با سیستم احراز هویتی که پیاده سازی شده، بر اساس نقشی که کاربر دارد از ورود او به روت هایی که نباید دسترسی داشته باشد جلوگیری میشود.
`,
    tags: ["Tailwind", "React", "Three JS", "Motion", "Redux", "Node JS"],
    links: {
      live: "http://195.88.208.124/",
      github: "https://github.com/Baharvandiaboalfazl/tech-log",
    },
  },
];

export default data;
