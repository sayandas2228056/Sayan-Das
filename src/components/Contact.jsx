import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import Conx from "./Conx";
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="px-10 my-20 w-screen min-h-screen">
      <div className="relative py-24 text-blue-50 bg-black rounded-lg sm:overflow-hidden">
        <div className="hidden overflow-hidden absolute top-0 -left-20 w-72 h-full sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute left-20 -top-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Eager To Collaborate
          </p>

          <AnimatedTitle
            title="<b>let&#39;s us Collaborate </b>"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          <Conx/>
        </div>
      </div>
    </div>
  );
};

export default Contact;