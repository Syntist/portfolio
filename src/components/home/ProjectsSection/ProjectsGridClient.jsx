"use client";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

export function ProjectsGridClient({ projects }) {
  return (
    <>
      <Box sx={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:3, mb:6 }}>
        <Box>
          <Typography component={motion.h2} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.6 }} transition={{ duration:.9, ease:[0.16,0.8,0.42,1] }}
            sx={{ fontSize:{ xs:'2.3rem', md:'3rem'}, fontWeight:600, lineHeight:1.15, letterSpacing:'-.5px', mb:1 }}>
            <span className="text-gradient">Projects</span> & Case Studies
          </Typography>
          <Typography component={motion.p} initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.5 }} transition={{ delay:.1, duration:.8 }} sx={{ maxWidth:640, fontSize:{ xs:'1rem', md:'1.05rem'}, lineHeight:1.55, color:'rgba(255 255 255 / .68)' }}>
            A curated selection of work highlighting product thinking, performance optimization, and polished user experience – from rapid prototypes to production-grade systems.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {projects.map((project, idx) => (
          <Grid key={project._id.toString()} item xs={12} sm={6} md={4} sx={{ display:'flex' }}>
            <motion.div style={{ width:'100%', display:'flex' }} initial={{ opacity:0, y:30, scale:.96 }} whileInView={{ opacity:1, y:0, scale:1 }} viewport={{ once:true, amount:.4 }} transition={{ duration:.85, delay: idx * 0.05, ease:[0.16,0.8,0.42,1] }}>
              <ProjectCard project={project} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
