"use client";

import { experience } from "@/info/experience";
import { Typography, Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export const ExperienceSection = () => (
  <Box sx={{ width:'100%', py:{ xs:8, md:10 } }}>
    <Container maxWidth="xl">
      <Box sx={{ mb:6 }}>
        <Typography component={motion.h2} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.85 }}
          sx={{ fontSize:{ xs:'2.2rem', md:'2.8rem'}, fontWeight:600, letterSpacing:'-.5px' }}>
          <span className="text-gradient">Experiences</span> & Impact
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {experience.map((item, idx) => (
          <Grid key={item.title} item xs={12} md={4}>
            <Box component={motion.div} initial={{ opacity:0, y:38 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.95, delay: idx * 0.06, ease:[0.16,0.8,0.42,1] }}
              className="glass-card" sx={{ position:'relative', height:'100%', display:'flex', flexDirection:'column', overflow:'hidden', pt:7 }}>
              <Box sx={{ position:'absolute', top:0, left:0, right:0, height:138, background: item.backgroundColor || 'linear-gradient(135deg,#6366f1,#8b5cf6)', borderBottom:'1px solid rgba(255 255 255 / .08)' }} />
              <Box sx={{ position:'absolute', top:24, left:24, width:84, height:84, borderRadius:24, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(255 255 255 / .12)', backdropFilter:'blur(4px)', border:'1px solid rgba(255 255 255 / .25)', boxShadow:'0 8px 24px -6px rgba(0 0 0 / .6), 0 0 0 1px rgba(255 255 255 / .25)' }}>
                <Image src={item.logo} width={60} height={60} style={{ objectFit:'contain', backgroundColor: item.imageBackgroundColor }} alt="" />
              </Box>
              <Box sx={{ p:3.2, pt:12, display:'flex', flexDirection:'column', gap:2, position:'relative', flexGrow:1 }}>
                <Box>
                  <Typography variant="h3" sx={{ fontSize:22, fontWeight:600, letterSpacing:'.3px', color:'#fff', mb:.6 }}>{item.role}</Typography>
                  <Typography sx={{ fontSize:15, fontWeight:500, letterSpacing:'.5px', textTransform:'uppercase', color:'rgba(255 255 255 / .5)', mb:.75 }}>{item.startDate} – {item.endDate}</Typography>
                  <Typography sx={{ fontSize:13.5, fontWeight:500, letterSpacing:'.5px', color:'rgba(255 255 255 / .55)', mb:1 }}>{item.title}</Typography>
                </Box>
                <Typography sx={{ fontSize:14.5, lineHeight:1.55, color:'rgba(255 255 255 / .7)', flexGrow:1 }}>{item.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
