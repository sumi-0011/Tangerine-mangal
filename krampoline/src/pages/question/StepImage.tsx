import { motion } from 'framer-motion';
import styled from 'styled-components';

import { defaultFadeInUpVariants } from '../../constants/motions';
import Knitting2 from './knitting-2.svg';
import Knitting3 from './knitting-3.svg';
import Thread from './thread-1.svg';

const StepImage = ({ step }: { step: number }) => {
  return (
    <Container>
      {step === 2 && (
        <>
          <motion.img
            src={Thread}
            alt="thread"
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </>
      )}
      {step === 3 && (
        <Step2>
          <motion.img
            src={Thread}
            alt="thread"
            // variants={defaultFadeInUpVariants}
            // initial="initial"
            // animate="animate"
            // exit="exit"
          />
          <motion.img
            src={Knitting2}
            alt="thread"
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </Step2>
      )}
      {step === 4 && (
        <Step3>
          <motion.img
            src={Thread}
            alt="thread"
            // variants={defaultFadeInUpVariants}
            // initial="initial"
            // animate="animate"
            // exit="exit"
          />{' '}
          <motion.img
            src={Knitting3}
            alt="thread"
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </Step3>
      )}
    </Container>
  );
};
const Step2 = styled.div`
  img {
    position: absolute;
    &:nth-child(1) {
      bottom: -26px;
      left: 0;
    }
    &:nth-child(2) {
      bottom: -23px;
      right: 0;
    }
  }
`;
const Step3 = styled.div`
  img {
    position: absolute;
    &:nth-child(1) {
      bottom: -26px;
      left: 0;
    }
    &:nth-child(2) {
      bottom: -64px;
      right: 0;
    }
  }
`;

const Container = styled.div`
  height: 220px;
  width: 100vw;
  background-color: #fff0bf;
  position: relative;
  max-width: 475px;
  transform: translateX(-36px);
  & > img {
    position: absolute;
    &:nth-child(1) {
      bottom: -26px;
      left: 0;
    }
    &:nth-child(2) {
      bottom: -23px;
      right: 0;
    }
  }
`;

export default StepImage;
