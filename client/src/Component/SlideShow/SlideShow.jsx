import React, { useState, useRef } from "react";
import {
    ProductContainer,
    Img,
    Control,
    MainImg,
    Name,
    Price,
    InfoOverlay,
    ButtonOverlay
} from "./SlideShow.style";
import { connect } from "react-redux";
import { addItem } from "../Redux/cart/cartAction";
import Buttom from "../Button/Button";
import {
    AnimatePresence,

} from "framer-motion";
import OutsideClickEvent from "../OutsideClickEvent/OutsideClickEvent";

const variants = {
    enter: ({ direction }) => {
        return {
            x: direction > 0 ? 300 : -300,

            opacity: 0
        };
    },
    center: ({ clicked }) => ({
        zIndex: 3,
        x: 0,
        height: "100%",

        opacity: 1,
        filter: clicked ? "grayscale(100%)" : "unset"
    }),

    exit: ({ direction }) => {
        return {
            x: direction < 0 ? 300 : -300,
            opacity: 0
        };
    }
};
const buttonOverlayVariants = {
    hidden: { opacity: 0, top: -300 },
    visible: { opacity: 0.9, top: 0 }
};
const infoOverlayVariants = {
    hidden: { opacity: 0, bottom: -300 },
    visible: { opacity: 0.9, bottom: 0 }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};
const wrap = (min, max, v) => {
    var rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
const SlideShow = ({ items, addItem }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [clicked, setClicked] = useState(false);
    const itemIndex = wrap(0, items.length, page);
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    const imgRef = useRef();
    OutsideClickEvent(imgRef, () => setClicked(false));
    const PrevImg = wrap(0, items.length, itemIndex - 1);
    const NextImg = wrap(0, items.length, itemIndex + 1);
    const { imageUrl, name, price } = items[itemIndex];
    const props = { direction, clicked };
    return (
        <ProductContainer>
            <AnimatePresence initial={false} custom={direction}>
                <Img
                    src={items[PrevImg].imageUrl}
                    style={{ left: "20%" }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="false"
                    key={page - 1}
                    onClick={() => paginate(-1)}
                />
                <Img
                    src={items[NextImg].imageUrl}
                    style={{ right: "20%" }}
                    key={page + 1}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="false"
                    onClick={() => paginate(1)}
                />
                <MainImg onClick={() => setClicked(!clicked)} ref={imgRef}>
                    <Img
                        key={page}
                        src={imageUrl}
                        custom={props}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30, duration: 4 },
                            opacity: { duration: 0.2 }
                        }}
                        style={{ width: "100%" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                    <ButtonOverlay
                        variants={buttonOverlayVariants}
                        initial={false}
                        animate={clicked ? "visible" : "hidden"}
                    >
                        <Buttom onClick={() => addItem(items[itemIndex])} className="button">
                            add to cart
      </Buttom>
                    </ButtonOverlay>
                    <InfoOverlay
                        variants={infoOverlayVariants}
                        initial={false}
                        animate={clicked ? "visible" : "hidden"}
                    >
                        <Name>{name}</Name>
                        <Price>{price} $</Price>
                    </InfoOverlay>
                </MainImg>
            </AnimatePresence>
            <Control
                onClick={() => paginate(-1)}
                style={{
                    left: "6%",
                    boxShadow: "-10px 7px 9px 0px rgba(0, 0, 0, 0.67) "
                }}
            >
                <svg
                    width="58"
                    height="78"
                    viewBox="0 0 58 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.36543 45.6109L34.5151 74.1531C37.15 76.5713 40.9042 77.8077 44.6784 77.8077C47.7298 77.8077 50.7944 76.999 53.2995 75.3454C58.9091 71.6363 59.5954 65.0969 54.8285 60.7269L31.014 38.903L54.8318 17.079C59.5954 12.7168 58.9091 6.17219 53.2995 2.46834C47.6865 -1.24329 39.2786 -0.706763 34.5151 3.65803L3.36543 32.1951C-0.855147 36.0622 -0.855147 41.7463 3.36543 45.6109Z"
                        fill="white"
                    />
                </svg>
            </Control>
            <Control
                onClick={() => paginate(1)}
                style={{
                    right: "6%",
                    boxShadow: "10px 7px 9px 0px rgba(0, 0, 0, 0.67) "
                }}
            >
                <svg
                    width="58"
                    height="70"
                    viewBox="0 0 58 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M54.6339 41.034L23.4846 66.7121C20.8497 68.8877 17.0955 70 13.3214 70C10.2701 70 7.20546 69.2725 4.70047 67.7848C-0.909129 64.4479 -1.59534 58.5647 3.17148 54.6332L26.9856 34.9992L3.16815 15.3652C-1.59534 11.4407 -0.909129 5.55284 4.70047 2.22065C10.3134 -1.11853 18.7211 -0.635843 23.4846 3.29096L54.6339 28.9644C58.8544 32.4435 58.8544 37.5572 54.6339 41.034Z"
                        fill="white"
                    />
                </svg>
            </Control>
        </ProductContainer>
    );
};
const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(SlideShow);
