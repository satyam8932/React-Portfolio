import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "MagicAiBox - AI Tools",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Delve into my Django-driven web applications, showcasing a fusion of creativity and functionality. I've crafted projects that seamlessly incorporate powerful AI APIs like ChatGPT for chat interactions, DALL-E for image creation, Replicatee Models for advanced modeling, and GPT-4 Vision for visionary insights. Explore these milestones in my portfolio, where each project reflects my dedication to pushing the boundaries of innovation and user-centric design.",
  },
  {
    id: 2,
    title: "DocBot - Chat with Documents",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Dive into my latest creation – an application revolutionizing document interaction. Utilizing the LangChain OpenAI API and Streamlit, it enables dynamic chatting with multiple documents. From summarizing to querying, experience a seamless blend of technology and user-friendly design that redefines how we engage with diverse document formats.",
  },
  {
    id: 3,
    title: "Kids Teaching ChatBot",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Step into the world of interactive learning with my backend creation – a kids' teaching chatbot. Through storytelling, explanations, and engaging communication, this innovative platform empowers children to explore and learn. With a robust backend, the chatbot facilitates an immersive educational experience, making the process of acquiring knowledge both fun and interactive.",
  },
  {
    id: 4,
    title: "Sign Language Detector",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Empower non-verbal communication with my groundbreaking project – a Sign Language Detector designed for the deaf and non-verbal community. By showcasing predefined signs, our AI models interpret and convey messages seamlessly, fostering a bridge of understanding. Experience the future of inclusive communication, where technology breaks barriers and connects hearts.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;