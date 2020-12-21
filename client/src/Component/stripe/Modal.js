import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Stripe.css";
const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
export default function Modal({ showModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="modal">
            <h2 className="modal-title">Delivery information</h2>
            <div>
              <svg
                width="256"
                height="148"
                viewBox="0 0 256 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.1929 75.1823L66.1925 75.1827L28.2524 115.826C21.1303 123.455 8.346 118.415 8.346 107.978V32.3073C8.346 23.1814 18.4658 17.6913 26.116 22.667L115.357 80.7085C115.357 80.7089 115.358 80.7093 115.359 80.7096C118.999 83.0605 123.487 84.1288 127.998 84.1402C132.504 84.1317 136.997 83.0632 140.641 80.7087L229.882 22.667C237.532 17.6913 247.652 23.1814 247.652 32.3073V107.977C247.652 118.414 234.868 123.454 227.745 115.824L189.807 75.1827L189.807 75.1824C188.631 73.9217 186.37 73.6824 184.844 74.7547L184.842 74.7561C183.431 75.7444 183.292 77.3795 184.346 78.5095C184.347 78.5095 184.347 78.5096 184.347 78.5096L240.14 138.278C240.537 138.702 240.692 139.328 240.481 139.914C240.257 140.538 239.664 140.962 238.985 140.962H17.0147C16.3674 140.962 15.7527 140.569 15.5173 139.914C15.2983 139.304 15.4816 138.683 15.8585 138.279L66.1929 75.1823ZM66.1929 75.1823C67.3685 73.9219 69.6263 73.682 71.1566 74.7554C72.5703 75.7476 72.7067 77.3804 71.6531 78.5099L15.8599 138.278L66.1929 75.1823ZM237.95 140.328C237.949 140.326 237.948 140.325 237.947 140.324L237.949 140.326L237.95 140.328ZM18.0501 140.328L18.0515 140.326L18.0501 140.328ZM13.1285 1.49985H242.872C249.472 1.49985 254.5 6.14476 254.5 11.3843V136.615C254.5 141.855 249.471 146.5 242.872 146.5H13.1285C6.5282 146.5 1.5 141.854 1.5 136.615V11.3843C1.5 6.14477 6.52808 1.49985 13.1285 1.49985ZM210.501 28.1779C220.096 21.9372 215.676 7.03774 204.231 7.03774H51.7688C40.3233 7.03774 35.9039 21.9372 45.4985 28.1779L119.621 76.3907C119.623 76.3915 119.624 76.3923 119.625 76.3931C121.766 77.8043 124.895 78.6135 127.999 78.6024C131.104 78.6135 134.233 77.8044 136.374 76.3932C136.376 76.3923 136.377 76.3914 136.378 76.3906L210.501 28.1779Z"
                  fill="url(#paint0_linear)"
                  fill-opacity="0.6"
                  stroke="url(#paint1_linear)"
                  stroke-width="3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="6.80195"
                    y1="27.9911"
                    x2="260.023"
                    y2="37.1839"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0.29" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="0"
                    y1="-0.000152588"
                    x2="250.669"
                    y2="-72.5001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF2F2F" />
                    <stop offset="1" stop-color="#E31E1E" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <input type="text" name="name" className="modal-input" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
