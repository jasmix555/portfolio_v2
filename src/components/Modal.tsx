// Modal.js
import { motion, AnimatePresence } from "framer-motion";
import style from "@/styles/Modal.module.scss";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";

type Award = string;

type Props = {
  selectedWork: any;
  about: any;
  closeModal: () => void;
  awards?: Award[];
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
            <div className={style.wrapper}>
              <div className={style.header}>
                <h1>{selectedWork.title}</h1>
                <div className={`${style.content}`}>
                  <h2>Summary</h2>
                  <p>{selectedWork.summary}</p>
                </div>
              </div>
              <div className={style.visual}>
                <div
                  className={style.thumbnail}
                  style={{
                    backgroundImage: `url(${selectedWork.thumbnail})`,
                  }}
                >
                  {selectedWork.awards && selectedWork.awards.length > 0 && (
                    <div className={style.awards}>
                      {selectedWork.awards.map(
                        (award: any, awardIdx: number) => (
                          <div
                            key={awardIdx}
                            className={style.awardItem}
                            style={{ backgroundImage: `url(${award})` }}
                          ></div>
                        )
                      )}
                    </div>
                  )}
                </div>

                <div className={style.details}>
                  <div className={`${style.content}`}>
                    <h2>Category</h2>
                    <p>{selectedWork.category.join(", ")}</p>
                  </div>

                  <div className={style.content}>
                    <h2>Duration</h2>
                    <p>{selectedWork.totalTime}</p>
                  </div>

                  <div className={`${style.content}`}>
                    <h2>During</h2>
                    <p>{selectedWork.when[0]}</p>
                  </div>

                  <div className={`${style.content}`}>
                    <h2>Goal</h2>
                    <p>{selectedWork.when[1]}</p>
                  </div>

                  <div className={`${style.content}`}>
                    <h2>Creation Team</h2>
                    <p>{selectedWork.when[2]}</p>
                  </div>

                  <div className={`${style.content} ${style.role}`}>
                    <h2>Role</h2>
                    <p>{selectedWork.role.join(", ")}</p>
                  </div>

                  <div className={`${style.content}`}>
                    <h2>Method</h2>
                    <div className={style.skills}>
                      {selectedWork.method.map((tag: any, tagIdx: number) => (
                        <div key={tagIdx} className={style.tag}>
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

                  <div className={style.content}>
                    <h2>Links</h2>
                    <div className={style.links}>
                      {selectedWork.link.map((link: any, linkIdx: number) => (
                        <Link key={linkIdx} href={link}>
                          {selectedWork.page[linkIdx]}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.information}>
                <div className={style.content}>
                  <h2>Learnt</h2>
                  <p>{selectedWork.learnt}</p>
                </div>
                <div className={style.content}>
                  <h2>Regrets</h2>
                  <p>{selectedWork.regret}</p>
                </div>
                <div className={style.content}>
                  <h2>Growth</h2>
                  <p>{selectedWork.growth}</p>
                </div>
              </div>
              <button onClick={closeModal} className={style.closeBtn}>
                <FaXmark />
              </button>
            </div>
          </motion.div>

          <div className={style.modalBackground} onClick={closeModal}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
