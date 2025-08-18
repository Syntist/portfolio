"use client";

import { Typography, Box, Container, Grid } from "@mui/material";
import Image from 'next/image';
import { motion } from 'framer-motion';

export const WhatIDoSection = () => {
  const icons = [
  { src:'/icons8-react-100.png', alt:'React' },
  { src:'/tech/react-native.svg', alt:'React Native' },
  { src:'/tech/kotlin.svg', alt:'Kotlin' },
  { src:'/tech/go.svg', alt:'Go' },
  { src:'/tech/aws.svg', alt:'AWS' },
  { src:'/tech/vercel.svg', alt:'Vercel' },
  { src:'/icons8-node-js-128.png', alt:'Node.js' },
  { src:'/icons8-npm-logo.svg', alt:'NPM' }
  ];
  const bulletPoints = [
  'Ship cross‑platform apps with React & React Native',
  'Scalable APIs and services in Node.js & Go',
  'Production Android features with Kotlin',
  'AWS cloud: Lambda, ECS, RDS, S3, CloudFront & IaC',
  'DevEx, performance tuning, and smooth CI/CD'
  ];
  return (
  <Box sx={{ width:'100%', py:{ xs:6, md:8 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box component={motion.div} initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:1, ease:[0.16,0.8,0.42,1] }}
              sx={{ position:'relative', borderRadius:'var(--radius-lg)', overflow:'hidden', aspectRatio:'4/3', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(145deg, rgba(255 255 255 / .06), rgba(255 255 255 / .02))', border:'1px solid rgba(255 255 255 / .08)', backdropFilter:'blur(20px) saturate(140%)' }}>
              <Image src={'/img02.gif'} alt="What I do" fill unoptimized style={{ objectFit:'cover', filter:'saturate(1.15) contrast(1.05) brightness(.9)' }} />
              <Box sx={{ position:'absolute', inset:0, background:'radial-gradient(circle at 35% 25%, rgba(99 102 241 / .35), transparent 60%)' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display:'flex' }}>
            <Box sx={{ my:'auto', width:'100%' }}>
              <Box sx={{ mb:4 }}>
                <Typography component={motion.h2} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.85 }}
                  sx={{ fontSize:{ xs:'2.2rem', md:'2.8rem'}, fontWeight:600, letterSpacing:'-.5px', mb:1 }}>
                  <span className='text-gradient'>What I Do</span>
                </Typography>
                <Typography component={motion.h3} initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.08, duration:.8 }}
                  sx={{ fontSize:{ xs:'1rem', md:'1.05rem'}, lineHeight:1.55, maxWidth:640, color:'rgba(255 255 255 / .7)' }}>
                  Full‑stack engineer shipping web, mobile, and cloud—React/React Native, Kotlin, Go, and AWS—with a product mindset focused on performance, DX, and delightful UX.
                </Typography>
              </Box>
              <Box sx={{
                display:'grid',
                gridTemplateColumns:{ xs:'repeat(3, minmax(0, 1fr))', sm:'repeat(4, minmax(0, 1fr))', md:'repeat(5, minmax(0, 1fr))', lg:'repeat(6, minmax(0, 1fr))' },
                gap:'14px',
                mb:4
              }}>
                {icons.map((icon,i)=>(
                  <Box key={icon.alt} component={motion.div} whileHover={{ y:-6, rotate: i%2? 4:-4 }} transition={{ type:'spring', stiffness:240, damping:16 }}
                    sx={{ width:'100%', aspectRatio:'1 / 1', p:'10px', borderRadius:'var(--radius-sm)', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(145deg, rgba(255 255 255 / .08), rgba(255 255 255 / .04))', border:'1px solid rgba(255 255 255 / .12)', boxShadow:'0 4px 14px -4px rgba(0 0 0 / .7), inset 0 1px 2px rgba(255 255 255 / .15)', position:'relative' }}>
                    <Image src={icon.src} alt={icon.alt} width={54} height={54} style={{ objectFit:'contain', width:'100%', height:'100%' }} />
                  </Box>
                ))}
              </Box>
              <Box component={motion.ul} initial="hidden" whileInView="show" viewport={{ once:true, amount:.5 }} variants={{ hidden:{}, show:{ transition:{ staggerChildren:.12 } } }} sx={{ listStyle:'none', m:0, p:0, display:'flex', flexDirection:'column', gap:2 }}>
                {bulletPoints.map(point => (
                  <Box key={point} component={motion.li} variants={{ hidden:{ opacity:0, y:18 }, show:{ opacity:1, y:0, transition:{ duration:.7, ease:[0.16,0.8,0.42,1] } } }}
                    sx={{ position:'relative', pl:3.2, fontSize:{ xs:'0.95rem', md:'1rem'}, lineHeight:1.5, color:'rgba(255 255 255 / .82)', fontWeight:400 }}>
                    <Box sx={{ position:'absolute', left:0, top:4, width:14, height:14, borderRadius:'50%', background:'linear-gradient(135deg,#6366f1,#ec4899)', boxShadow:'0 0 0 4px rgba(99 102 241 / .25)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <Box sx={{ width:6, height:6, borderRadius:'50%', background:'#fff' }} />
                    </Box>
                    {point}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
