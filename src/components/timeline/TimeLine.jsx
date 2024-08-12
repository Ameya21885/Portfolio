import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

const TimeLine = ({ items }) => {
  const isDesktop = useMediaQuery("(min-width:1024px)"); // Media query for desktop view

  return (
    <Timeline
      position={isDesktop ? "alternate-reverse" : "right"}
      sx={{ padding: 0 }}
    >
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
            style={{ fontStyle: "italic", fontWeight: 500 }} // Styling date text
          >
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: item.iconBackground }}>
              {item.icn && item.icn}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "7rem", // Adjusted size to fit within the TimelineContent
                  height: "3rem", // Adjusted size to fit within the TimelineContent
                  marginBottom: "-13px", // Adds spacing between image and text
                }}
              />
            )}
            <Typography
              variant="h6"
              component="span"
              style={{ fontWeight: 600 }} // Styling title text
            >
              {item.title}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: 500 }} // Styling subtitle text
            >
              {item.subtitle}
            </Typography>
            <Typography
              variant="body1"
              style={{ fontStyle: "italic", fontWeight: 400 }} // Styling description text
            >
              {item.description}
            </Typography>
            {item.marks && (
              <Typography
                variant="body2"
                style={{ fontWeight: 700 }} // Styling marks text
              >
                {item.marks}
              </Typography>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimeLine;
