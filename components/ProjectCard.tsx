"use client";

import Link from "next/link";
import { ArrowRight, Github, X, ZoomIn } from "lucide-react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
  Box,
  Modal,
  IconButton,
} from "@mui/material";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  technologies,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 40px rgba(59, 130, 246, 0.15)",
            borderColor: "primary.main",
          },
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {description}
          </Typography>
          <Box
            sx={{
              position: "relative",
              my: 2,
              borderRadius: 1,
              overflow: "hidden",
              cursor: "pointer",
              "&:hover .zoom-icon": {
                opacity: 1,
              },
              "&:hover .project-image": {
                transform: "scale(1.05)",
              },
            }}
            onClick={handleImageClick}
          >
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={imageAlt}
              className="project-image"
              sx={{
                borderRadius: 1,
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
            {/* Zoom Icon Overlay */}
            <Box
              className="zoom-icon"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderRadius: "50%",
                p: 1,
                opacity: 0,
                transition: "opacity 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ZoomIn className="h-6 w-6" style={{ color: "white" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              mt: 2,
            }}
          >
            {technologies.map((tech) => (
              <Chip key={tech} label={tech} size="small" />
            ))}
          </Box>
        </CardContent>
        <CardActions
          sx={{
            mt: "auto",
            justifyContent: "space-between",
            px: 2,
            pb: 2,
          }}
        >
          <Button
            size="small"
            variant="outlined"
            startIcon={<Github className="h-4 w-4" />}
            component={Link}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
                borderColor: "primary.main",
                transform: "translateY(-2px)",
              },
            }}
          >
            Code
          </Button>
          {demoUrl && (
            <Button
              size="small"
              variant="contained"
              endIcon={<ArrowRight className="h-4 w-4" />}
              component={Link}
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                  "& .MuiSvgIcon-root": {
                    transform: "translateX(4px)",
                  },
                },
              }}
            >
              Demo
            </Button>
          )}
        </CardActions>
      </Card>

      {/* Image Preview Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        onKeyDown={handleKeyDown}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(8px)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
            animation: "modalFadeIn 0.3s ease-out",
            "@keyframes modalFadeIn": {
              from: {
                opacity: 0,
                transform: "scale(0.8)",
              },
              to: {
                opacity: 1,
                transform: "scale(1)",
              },
            },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: -40,
              right: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              zIndex: 1,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <X className="h-5 w-5" />
          </IconButton>

          {/* Project Image */}
          <Box
            component="img"
            src={image}
            alt={imageAlt}
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 2,
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              backgroundColor: "background.paper",
            }}
          />

          {/* Image Info Overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
              color: "white",
              p: 3,
              borderRadius: "0 0 8px 8px",
            }}
          >
            <Typography variant="h6" component="h3" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
              Click outside or press ESC to close
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
