import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

function PageContainer({
  children,
  delay,
}: PropsWithChildren<{
  delay?: number;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        // transition: {
        //   delay: delay ?? 0,
        // },
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default PageContainer;
