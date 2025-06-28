# پروژه پورتفولیو شخصی

این پروژه یک وب‌سایت پورتفولیو شخصی است که با استفاده از React برای بخش فرانت‌اند و Node.js (به طور ضمنی برای API وبلاگ و ارسال ایمیل) برای بخش بک‌اند توسعه داده شده است. هدف این پروژه نمایش مهارت‌ها، پروژه‌ها و مقالات وبلاگ توسعه‌دهنده است.

## ✨ ویژگی‌ها

- **بخش وبلاگ پویا:**
  - نمایش لیست مقالات با قابلیت جستجو.
  - فیلتر کردن مقالات بر اساس دسته‌بندی.
  - صفحه اختصاصی برای هر مقاله با پشتیبانی از Markdown.
  - بارگذاری داده‌های مقالات از API (با داده‌های محلی به عنوان جایگزین در صورت بروز خطا).
- **بخش پروژه‌ها:**
  - نمایش پروژه‌های انجام شده با گالری تصاویر (با استفاده از Swiper.js).
  - توضیحات پروژه و لینک به نسخه زنده و مخزن کد.
- **طراحی واکنش‌گرا (Responsive).**
- **قابلیت تغییر تم (روشن/تاریک).**
- **ساختار کامپوننت‌محور با React.**
- **استفاده از React Hooks برای مدیریت وضعیت و منطق.**

## 🛠️ تکنولوژی‌های استفاده شده

- **فرانت‌اند:**
  - React
  - React Router DOM (برای مسیریابی)
  - Axios (برای درخواست‌های HTTP)
  - React Markdown (برای رندر کردن محتوای Markdown)
  - Swiper.js (برای اسلایدر تصاویر در بخش پروژه‌ها)
  - CSS (برای استایل‌دهی)
- **بک‌اند (بر اساس فایل‌ها و توضیحات):**
  - Node.js
  - Express.js (احتمالاً برای ساخت API)
- **ابزارها:**
  - Git
  - npm/yarn

## 🚀 راه‌اندازی و اجرا (بخش کلاینت)

برای اجرای بخش کلاینت این پروژه به صورت محلی، مراحل زیر را دنبال کنید:

1.  **پیش‌نیازها:**

    - Node.js و npm (یا yarn) باید نصب شده باشند.

2.  **کلون کردن مخزن (Repository):**

    ```bash
    git clone https://github.com/baharvandiaboalfazl/portfolio.git
    cd client
    ```

3.  **نصب وابستگی‌ها:**

    ```bash
    npm install
    # یا اگر از yarn استفاده می‌کنید
    # yarn install
    ```

4.  **اجرای پروژه:**
    ```bash
    npm start
    # یا اگر از yarn استفاده می‌کنید
    # yarn start
    ```
    پس از اجرای این دستور، برنامه معمولاً در آدرس `http://localhost:3000` در مرورگر شما باز خواهد شد.

**توجه:** برای عملکرد کامل بخش وبلاگ، نیاز است که سرور بک‌اند (API) نیز در حال اجرا باشد و به درستی پیکربندی شده باشد تا داده‌های مقالات را از مسیرهای `/api/posts` و `/api/posts/:postId` ارائه دهد. فایل `client/src/components/data/posts.js` به عنوان داده‌های جایگزین در صورت عدم دسترسی به API استفاده می‌شود.

## 📂 ساختار پروژه (بخش کلاینت)

ساختار اصلی پوشه‌های بخش کلاینت به شرح زیر است:

````

```text
client/
├── public/
│   ├── index.html                     # قالب اصلی HTML
│   ├── favicon.ico                    # آیکون وب‌سایت
│   └── ... (فایل‌های عمومی دیگر مانند manifest.json, robots.txt)
├── src/
│   ├── assets/                        # تصاویر، فونت‌ها و دیگر فایل‌های ثابت
│   │   └── images/
│   │   └── fonts/
│   ├── components/                    # کامپوننت‌های عمومی و قابل استفاده مجدد React
│   │   ├── common/                    # کامپوننت‌های مشترک (Button, Modal, Spinner و ...)
│   │   ├── layout/                    # کامپوننت‌های مربوط به ساختار صفحه (Header, Footer, Navbar)
│   │   └── ...
│   ├── features/                      # کامپوننت‌ها و منطق مربوط به یک ویژگی خاص
│   │   ├── blog/                      # همه چیز مربوط به وبلاگ
│   │   │   ├── components/            # کامپوننت‌های خاص وبلاگ (PostItem, PostList, SearchBar)
│   │   │   ├── hooks/                 # هوک‌های سفارشی برای وبلاگ (useBlogData, usePost)
│   │   │   └── services/              # توابع مربوط به فراخوانی API وبلاگ (blogApi.js)
│   │   ├── projects/                  # همه چیز مربوط به بخش پروژه‌ها
│   │   │   └── components/            # (ProjectCard, ProjectGallery از Swiper.js)
│   │   └── theme/                     # منطق و کامپوننت مربوط به تغییر تم
│   │       ├── ThemeToggle.jsx
│   │       └── useTheme.js
│   ├── pages/                         # کامپوننت‌های سطح بالا که هر کدام یک صفحه را نمایش می‌دهند
│   │   ├── HomePage.jsx
│   │   ├── BlogPage.jsx               # صفحه‌ای که PostList را نمایش می‌دهد
│   │   ├── PostDetailPage.jsx         # صفحه‌ای که یک پست تکی را با React Markdown نمایش می‌دهد
│   │   ├── ProjectsPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   ├── context/                       # کانتکست‌های React (مانند BlogContext.js, ThemeContext.js)
│   ├── hooks/                         # هوک‌های سفارشی عمومی React
│   ├── services/                      # ماژول‌های مربوط به ارتباط با APIهای خارجی (مانند axios instance)
│   │   └── apiClient.js
│   ├── styles/                        # فایل‌های CSS عمومی، متغیرهای CSS، reset CSS
│   │   └── global.css
│   ├── utils/                         # توابع کمکی عمومی (مانند форматирование дат, اعتبارسنجی)
│   ├── App.js                         # کامپوننت اصلی برنامه و تعریف مسیرها (React Router DOM)
│   ├── index.js                       # نقطه ورود اصلی برنامه React
│   └── reportWebVitals.js
├── .env                               # متغیرهای محیطی (مانند آدرس API بک‌اند)
├── .gitignore
├── package.json
└── README.md                          # (این فایل!)
````

## 📂 ساختار پیشنهادی پروژه (بخش سرور - Node.js/Express.js)

این ساختار برای بخش بک‌اند پروژه (API وبلاگ، ارسال ایمیل و سرویس‌دهی فایل‌های آپلود شده) پیشنهاد می‌شود و معمولاً در کنار پوشه `client` قرار می‌گیرد:

```text
server/
├── config/                # فایل‌های پیکربندی (مانند پورت سرور، اتصال به دیتابیس، کلیدهای API)
│   └── index.js           # (برای export کردن متغیرهای محیطی و پیکربندی‌ها)
│   └── db.js              # (اگر از دیتابیس استفاده می‌کنید، تنظیمات اتصال)
├── controllers/           # کنترلرها: منطق مربوط به هر route (درخواست و پاسخ)
│   ├── postController.js  # منطق مربوط به واکشی، ایجاد، ویرایش و حذف پست‌های وبلاگ
│   └── contactController.js # منطق مربوط به فرم تماس (ارسال ایمیل)
├── middleware/            # میان‌افزارها (مانند اعتبارسنجی، مدیریت خطا، لاگ کردن)
│   ├── authMiddleware.js  # (اگر نیاز به احراز هویت برای بخش مدیریت دارید)
│   └── errorHandler.js    # برای مدیریت یکپارچه خطاها
├── models/                # (اگر از دیتابیس استفاده می‌کنید) Schema ها و مدل‌های داده (مانند Mongoose)
│   └── Post.js            # مدل داده برای پست‌های وبلاگ
├── routes/                # تعریف مسیرهای API
│   ├── api/
│   │   ├── posts.js       # مسیرهای مربوط به API وبلاگ (GET /api/posts, GET /api/posts/:id)
│   │   └── contact.js     # مسیر مربوط به API فرم تماس (POST /api/contact)
│   └── index.js           # (برای جمع‌آوری و export کردن همه route ها)
├── services/              # منطق تجاری پیچیده‌تر که توسط controller ها استفاده می‌شود
│   └── emailService.js    # (برای ارسال ایمیل با استفاده از کتابخانه‌هایی مانند Nodemailer)
├── uploads/               # پوشه برای فایل‌های آپلود شده توسط کاربران (مانند تصاویر وبلاگ)
│   └── images/
├── .env                   # متغیرهای محیطی سرور (پورت، رشته اتصال دیتابیس، کلیدهای سرویس ایمیل)
├── server.js              # (یا app.js / index.js) نقطه ورود اصلی سرور، راه‌اندازی Express و اتصال میان‌افزارها و route ها
├── package.json           # وابستگی‌ها و اسکریپت‌های سرور
└── .gitignore
```

## 🔗 لینک‌ها

- **نسخه زنده پروژه:** https://baharvandiaboalfazl.github.io/portfolio/
- **مخزن GitHub:** https://github.com/baharvandiaboalfazl/portfolio

## 👤 نویسنده

- **ابوالفضل بهاروندی**

---

امیدوارم این فایل به شما کمک کند! می‌توانید آن را ویرایش کرده و جزئیات بیشتری را در صورت نیاز اضافه کنید.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
