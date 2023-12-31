// Modal.js
import { motion, AnimatePresence } from "framer-motion";
import style from "@/styles/Modal.module.scss";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  selectedWork: any;
  about: any;
  closeModal: () => void;
};

const Modal = ({ selectedWork, closeModal, about }: Props) => {
  return (
    <AnimatePresence>
      {selectedWork && (
        <motion.div
          className={`${style.modalWrapper} `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={style.modalContent}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h2>{selectedWork.title}</h2>
            <div className={style.wrapper}>
              <div
                className={style.thumbnail}
                style={{
                  backgroundImage: `url(${selectedWork.thumbnail})`,
                }}
              ></div>
              <div className={style.contentWrapper}>
                <div className={`${style.content} ${style.dateCreated}`}>
                  <h2>Duration</h2>
                  <p>{selectedWork.totalTime}</p>
                </div>
                <div className={`${style.content}`}>
                  <h2>Summary</h2>
                  <p>{selectedWork.summary}</p>
                </div>
                <div className={`${style.content}`}>
                  <h2>Category</h2>
                  <p>{selectedWork.category.join(", ")}</p>
                </div>
                <div className={`${style.content} ${style.method1}`}>
                  <h2>During</h2>
                  <p>{selectedWork.method[0]}</p>
                </div>
                <div className={`${style.content} ${style.method2}`}>
                  <h2>Creation Team</h2>
                  <p>{selectedWork.method[2]}</p>
                </div>
                <div className={`${style.content} ${style.role}`}>
                  <h2>Role</h2>
                  <p>{selectedWork.role.join(", ")}</p>
                </div>
                <div className={`${style.content}`}>
                  <h2>SkillSet</h2>
                  <div className={style.skills}>
                    {selectedWork.tags.map((tag: any, tagIdx: number) => (
                      <div key={tagIdx} className={style.tag}>
                        {/* Render the icon based on the tag name */}
                        {about.skills.map((skill: any) =>
                          skill.name === tag ? (
                            <span key={skill.name} className={style.icon}>
                              <skill.icon />
                            </span>
                          ) : null
                        )}
                        <span className={style.tagText}>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button onClick={closeModal} className={style.closeBtn}>
              <FaXmark />
            </button>
            <Link href={selectedWork.link} className={style.link}>
              <span>見に行く</span>
            </Link>
          </motion.div>
          <div className={style.modalBackground} onClick={closeModal}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
