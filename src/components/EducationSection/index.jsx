"use client";

import { education } from "@/info/education";
import { Typography, Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
  <Box sx={{ width:'100%', py:{ xs:6, md:8 } }}>
      <Container maxWidth="xl">
  <Box sx={{ mb:5 }}>
          <Typography component={motion.h2} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.85 }}
            sx={{ fontSize:{ xs:'2.2rem', md:'2.8rem'}, fontWeight:600, letterSpacing:'-.5px' }}>
            <span className="text-gradient">Education</span> & Learning
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {education.map((item, idx) => (
            <Grid key={item.title} item xs={12} md={6}>
              <Box component={motion.div} initial={{ opacity:0, y:34 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.9, delay: idx * 0.05, ease:[0.16,0.8,0.42,1] }}
                className="glass-card" sx={{ p:3.2, display:'flex', gap:3, alignItems:'flex-start', height:'100%', position:'relative', overflow:'hidden' }}>
                <Box sx={{ width:82, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'var(--radius-sm)', background:'linear-gradient(145deg, rgba(255 255 255 / .12), rgba(255 255 255 / .04))', border:'1px solid rgba(255 255 255 / .12)', boxShadow:'inset 0 1px 2px rgba(255 255 255 / .2), 0 4px 12px -4px rgba(0 0 0 / .7)' }}>
                  <Image src={item.logo} width={64} height={64} alt="" style={{ objectFit:'contain', ...item.style }} />
                </Box>
                <Box sx={{ flexGrow:1 }}>
                  <Typography variant="h3" sx={{ fontSize:20, fontWeight:600, letterSpacing:'.3px', mb:.3, color:'#fff' }}>{item.title}</Typography>
                  <Typography sx={{ fontSize:16, fontWeight:400, lineHeight:1.4, color:'rgba(255 255 255 / .75)', mb:.5 }}>{item.degree}</Typography>
                  <Typography sx={{ fontSize:12.5, fontWeight:500, letterSpacing:'.5px', textTransform:'uppercase', color:'rgba(255 255 255 / .45)', mb:1 }}>{item.start} – {item.end}</Typography>
                  <Typography sx={{ fontSize:14.5, lineHeight:1.55, color:'rgba(255 255 255 / .68)' }}>{item.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
