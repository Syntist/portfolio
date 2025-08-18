"use client";

import { proficiency } from "@/info/proficiency";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";

export const Proficiency = () => {
  return (
  <Box sx={{ width:'100%', py:{ xs:6 } }}>
      <Container maxWidth="xl">
  <Box sx={{ mb:5, display:'flex', flexDirection:'column', gap:1 }}>
          <Typography component={motion.h2} initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.85 }}
            sx={{ fontSize:{ xs:'2.2rem', md:'2.8rem'}, fontWeight:600, letterSpacing:'-.5px' }}>
            <span className="text-gradient">Proficiency</span> & Focus
          </Typography>
          <Typography component={motion.p} initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1, duration:.75 }}
            sx={{ maxWidth:760, fontSize:{ xs:'1rem', md:'1.05rem'}, lineHeight:1.55, color:'rgba(255 255 255 / .7)' }}>
            A snapshot of where I spend most of my engineering energy – balancing product velocity with code quality, performance and developer experience.
          </Typography>
        </Box>
        <Box sx={{ display:'grid', gap:5 }}>
          {proficiency.map((item, idx) => (
            <Box key={item.title} component={motion.div} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.8, delay: idx * 0.05 }} sx={{ mb:4 }}>
              <Box sx={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', mb:1 }}>
                <Typography variant="h3" sx={{ fontSize:{ xs:'1.25rem', md:'1.35rem'}, fontWeight:500, letterSpacing:'.5px', display:'flex', gap:1, alignItems:'center' }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize:13, fontWeight:500, color:'rgba(255 255 255 / .55)', letterSpacing:'.5px' }}>{item.value}%</Typography>
              </Box>
              <Box sx={{ position:'relative', height:12, borderRadius:999, overflow:'hidden', background:'linear-gradient(90deg, rgba(255 255 255 / .08), rgba(255 255 255 / .04))', border:'1px solid rgba(255 255 255 / .13)', boxShadow:'inset 0 1px 2px rgba(0 0 0 / .6)' }}>
                <motion.span style={{ position:'absolute', inset:0, borderRadius:999, background:'linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899,#f59e0b)', boxShadow:'0 0 0 1px rgba(255 255 255 / .25), 0 4px 12px -2px rgba(99 102 241 / .65)' }}
                  initial={{ width:0 }} whileInView={{ width: item.value + '%' }} viewport={{ once:true }} transition={{ duration:1.4, ease:[0.16,0.8,0.42,1] }} />
                <span style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(255 255 255 / .4), rgba(255 255 255 / 0))', opacity:.25 }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
