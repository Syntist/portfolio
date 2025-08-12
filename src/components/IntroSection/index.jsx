"use client";

import * as React from 'react';
import { Box, Container, Button } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: .8, ease: [0.16,0.8,0.42,1] } }
};

function IntroSection() {
  return (
    <Box sx={{ position:'relative', width:'100%', overflow:'hidden', pt:{ xs:8, md:10}, pb:{ xs:8, md:10} }}>
      {/* Decorative background layers */}
      <Box aria-hidden="true" sx={{ position:'absolute', inset:0, overflow:'hidden', zIndex:0 }}>
        <Image src={'/background.webp'} alt="background" fill priority style={{ objectFit:'cover', filter:'brightness(.55) saturate(1.1)' }} />
        <Box sx={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(14,17,23,.6) 0%, rgba(14,17,23,.85) 60%, rgba(14,17,23,1) 100%)' }} />
        <Box sx={{ position:'absolute', inset:0, background:'radial-gradient(circle at 50% 40%, rgba(99 102 241 / .35), transparent 60%)' }} />
      </Box>

      <Container maxWidth="xl" sx={{ position:'relative', zIndex:1 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="show" style={{ maxWidth: 980, margin:'0 auto', textAlign:'center', paddingInline:'clamp(0.5rem,2vw,1.5rem)' }}>
          <motion.div variants={itemVariants}>
            <Box sx={{ display:'inline-flex', alignItems:'center', gap:1, px:1.5, py:0.5, mb:3, borderRadius:999, fontSize:12, fontWeight:500, letterSpacing:'.5px', background:'rgba(255 255 255 / .08)', backdropFilter:'blur(8px)', border:'1px solid rgba(255 255 255 / .15)' }}>
              <span style={{ background:'var(--gradient-accent)', WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent' }}>Full Stack Engineer</span>
              <span style={{ opacity:.55 }}>•</span>
              <span>Open Source</span>
            </Box>
          </motion.div>
          <motion.h1 variants={itemVariants} style={{ fontSize:'clamp(2.5rem,6vw,4.2rem)', lineHeight:1.05, fontWeight:600, margin:'0 0 1.2rem', letterSpacing:'-1px' }}>
            Crafting <span className="text-gradient">Scalable</span> & Delightful Digital Experiences
          </motion.h1>
          <motion.p variants={itemVariants} style={{ fontSize:'clamp(1.05rem,1.5vw,1.25rem)', lineHeight:1.6, maxWidth:760, margin:'0 auto 2.2rem', color:'rgba(255 255 255 / .78)', fontWeight:400 }}>
            I am <strong style={{ color:'#fff' }}>Syed Talha Khalid</strong>, a passionate software engineer focused on building high-impact products across the stack – from resilient APIs and data-driven backends to immersive, accessible user interfaces.
          </motion.p>
          <motion.div variants={itemVariants} style={{ display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap', marginBottom:'2rem' }}>
            <Button component={Link} href="#projects" size="large" sx={{
              position:'relative',
              fontWeight:600,
              px:3.4,
              py:1.4,
              fontSize:16,
              borderRadius:'var(--radius-lg)',
              background:'var(--gradient-accent)',
              color:'#fff',
              textTransform:'none',
              boxShadow:'0 8px 30px -4px rgba(99 102 241 / .55)',
              '&:hover': { background:'linear-gradient(135deg,#4f46e5,#7c3aed 35%,#db2777 65%,#d97706)', boxShadow:'var(--shadow-glow)' }
            }}>View Projects</Button>
            <Button component={Link} href="/assistant" size="large" variant="outlined" sx={{
              position:'relative',
              fontWeight:500,
              px:3.2,
              py:1.35,
              fontSize:15,
              borderRadius:'var(--radius-lg)',
              border:'1px solid rgba(255 255 255 / .18)',
              color:'#fff',
              textTransform:'none',
              background:'rgba(255 255 255 / .05)',
              backdropFilter:'blur(10px)',
              '&:hover': { background:'rgba(255 255 255 / .12)', borderColor:'rgba(255 255 255 / .35)' }
            }}>Open Assistant</Button>
          </motion.div>
          <motion.div variants={itemVariants} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:'1rem', maxWidth:760, margin:'0 auto' }}>
            {[
              'React','Node.js','Next.js','TypeScript','MongoDB','Cloud'
            ].map(tag => (
              <motion.div key={tag} whileHover={{ y:-4 }} style={{
                padding:'10px 14px',
                fontSize:13,
                letterSpacing:'.5px',
                textTransform:'uppercase',
                fontWeight:600,
                background:'linear-gradient(145deg, rgba(255 255 255 / .08), rgba(255 255 255 / .04))',
                border:'1px solid rgba(255 255 255 / .1)',
                borderRadius:'var(--radius-sm)',
                backdropFilter:'blur(8px)',
                color:'rgba(255 255 255 / .85)',
                position:'relative'
              }}>{tag}</motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
export default IntroSection;