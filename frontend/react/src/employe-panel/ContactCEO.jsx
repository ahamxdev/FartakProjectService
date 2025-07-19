const contactMethods = [
  {
    title: "واتس اپ",
    icon: "/img/employer/whatsapp.png",
    subTitle: "هم اکنون پیام دهید",
    bgColor: "#BCE4C5",
  },
  {
    title: "تلگرام",
    icon: "/img/employer/telegram.png",
    subTitle: "هم اکنون پیام دهید",
    bgColor: "#B0D6FF",
  },
  {
    title: "تماس تلفنی",
    icon: "/img/employer/calling.png",
    subTitle: "شماره : 09136279624",
    bgColor: "#fff",
  },
  {
    title: "صفحه چت",
    icon: "/img/employer/chatting.png",
    subTitle: "هم اکنون چت کنید",
    bgColor: "#fff",
  },
];
const ContactCEO = () => {
  return (
    <div className="contact-ceo">
      {contactMethods.map((method, index) => (
        <div
          key={index}
          className="contact-ceo-card container-effects"
          style={{ backgroundColor: method.bgColor }}
        >
          <img src={method.icon} alt={method.title} />
          <p className="mb-0"> ارتباط با مدیر عامل در {method.title}</p>
          <p className="mb-0">{method.subTitle}</p>
        </div>
      ))}
      {/* Placeholder for additional content */}
    </div>
  );
};

export default ContactCEO;
