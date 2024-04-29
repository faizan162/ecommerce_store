import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Countdown from "react-countdown";

export default function DealOfMonthLeft({ title }) {
  const Completionist = () => <span>Expired</span>;
  const countDownDate = new Date("May 25, 2024 12:48:25").getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleCompletion = () => {
    setCompleted(true);
  };

  const handleCountdownUpdate = ({ days, hours, minutes, seconds }) => {
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="20px"
        className="deals-left"
        width="50%"
      >
        <Heading fontSize="46px" fontWeight="500" textTransform="capitalize">
          {title}
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </Text>
        <Button
          colorScheme="none"
          backgroundColor="black"
          color="white"
          width="207px"
        >
          Buy Now
        </Button>
        <Heading
          fontSize="28px"
          textTransform="capitalize"
          fontWeight="600"
          color="#484848"
          as="h3"
        >
          Hurry, before its too late
        </Heading>
        <Box className="deals-timer">
          <Text fontSize={"20px"} fontWeight={"600"} color={"#484848"}>
            {completed ? (
              <Completionist />
            ) : (
              <Box display="flex" gap="30px">
                <Box
                  className="days"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap="5px"
                  width="100%"
                >
                  <Box
                    height="70px"
                    width="70px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="white"
                    borderRadius="10px"
                    className="deals-count-down"
                  >
                    {days}
                  </Box>
                  <Text fontSize="20px" fontWeight="400">
                    Days
                  </Text>
                </Box>
                <Box
                  className="hours"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap="5px"
                  width="100%"
                >
                  <Box
                    height="70px"
                    width="70px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="white"
                    borderRadius="10px"
                    className="deals-count-down"
                  >
                    {hours}
                  </Box>
                  <Text fontSize="20px" fontWeight="400">
                    Hr
                  </Text>
                </Box>
                <Box
                  className="minutes"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap="5px"
                  width="100%"
                >
                  <Box
                    height="70px"
                    width="70px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="white"
                    borderRadius="10px"
                    className="deals-count-down"
                  >
                    {minutes}
                  </Box>
                  <Text fontSize="20px" fontWeight="400">
                    Mins
                  </Text>
                </Box>
                <Box
                  className="seconds"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap="5px"
                  width="100%"
                >
                  <Box
                    height="70px"
                    width="70px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="white"
                    borderRadius="10px"
                    className="deals-count-down"
                  >
                    {seconds}
                  </Box>
                  <Text fontSize="20px" fontWeight="400">
                    Sec
                  </Text>
                </Box>
              </Box>
            )}
          </Text>
        </Box>
        <Box display={"none"}>
          <Countdown
            date={countDownDate}
            onComplete={handleCompletion}
            onTick={handleCountdownUpdate}
          />
        </Box>
      </Box>
    </>
  );
}
