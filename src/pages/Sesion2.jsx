import SesionTemplate from "../components/SeccionTemplate";
import { motion } from "framer-motion";
import "../App.scss";
import "../components/sessions-styles/Session2.scss";

export default function Sesion2() {
  return (
    <SesionTemplate title={"Seccion 2"}>
      <div className="title-section title-section-seccion-2">
        <h2>
          OBJECTIVE: Read about the UN's Sustainable Development Goals to share
          your opinion in a blog entry.
        </h2>
      </div>
      <div className="information-section-seccion-2">
        <motion.p
          className="p-element p-el-1"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          What is the main objective of SDG 5? The main objective of Sustainable
          Development Goals Goal 5 is to achieve gender equality and empower all
          women and girls. It focuses on ending discrimination, violence, and
          unequal opportunities.
        </motion.p>
        <motion.p
          className="p-element p-el-2"
          initial={{ opacity: 0, x: 45, y: 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          According to the text, what challenges do women and girls face? Women
          and girls often face discrimination, violence, limited access to
          education, unequal pay, and fewer job opportunities. They may also
          have less participation in decision-making.
        </motion.p>
        <motion.p
          className="p-element p-el-3"
          initial={{ opacity: 0, x: -45, y: 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          What types of inequalities does SDG 10 address? SDG 10 aims to reduce
          inequalities between people, including differences in income, social
          status, gender, disability, ethnicity, and access to opportunities.
        </motion.p>
        <motion.p
          className="p-element p-el-4"
          initial={{ opacity: 0, x: 45, y: 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Why do marginalized communities face difficulties? Marginalized
          communities face difficulties because they often lack access to
          education, healthcare, jobs, and political participation, and they may
          experience discrimination or exclusion.
        </motion.p>
        <motion.p
          className="p-element p-el-5"
          initial={{ opacity: 0, x: -45, y: 40}}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Why do traditional beliefs influence gender roles? Traditional beliefs
          influence gender roles because they are deeply rooted cultural norms
          that define what men and women are “expected” to do, often limiting
          opportunities for women.
        </motion.p>
        <motion.p
          className="p-element p-el-6"
          initial={{ opacity: 0, x: 45, y: 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0}}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          How can inequality affect the development of a country? Inequality can
          slow development because it limits people’s potential, reduces
          productivity, increases poverty, and creates social and economic
          instability.
        </motion.p>
      </div>

      <hr />

      <div className="image-section">
        <div className="image-element"></div>
      </div>
    </SesionTemplate>
  );
}
