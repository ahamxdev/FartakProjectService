const settingsField = [
  { id: 0, title: "همه اعلان ها" },
  { id: 1, title: "ثبت پیشنهاد جدید" },
  { id: 2, title: "رد شدن پروژه" },
  { id: 3, title: "تغییر وضعیت مراحل  پروژه" },
  { id: 4, title: "پیام های خوانده نشده" },
  { id: 5, title: "درخواست واریز" },
  { id: 6, title: "پاسخ تیکت" },
  { id: 7, title: "تایید پروژه " },
  { id: 8, title: "لغو شدن پروژه در حال انجام" },
];
const Settings = () => {
  return (
    <div className="settings-container container-effects">
      <form className="settings-form">
        {settingsField.map((item) => (
          <div key={item.id} className="settings-field">
            <h2 className="settings-field-title">{item.title}</h2>
            <label htmlFor={`email-${item.id}`}>
              <input type="checkbox" id={`email-${item.id}`} name="email" />{" "}
              ایمیل
            </label>
            <label htmlFor={`sms-${item.id}`}>
              <input
                type="checkbox"
                id={`sms-${item.id}`}
                name="sms"
                checked
                disabled
              />{" "}
              پیامک
            </label>
            <label htmlFor={`site-${item.id}`}>
              <input type="checkbox" id={`site-${item.id}`} name="site" />{" "}
              نوتیفیکیشن سایت
            </label>
            <label htmlFor={`telegram-${item.id}`}>
              <input
                type="checkbox"
                id={`telegram-${item.id}`}
                name="telegram"
              />{" "}
              تلگرام
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Settings;
