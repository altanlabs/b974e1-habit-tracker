import { motion } from "framer-motion";
import { ArrowRight, Smile, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Welcome to Your Habit Tracker
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Track Your Habits
          <br />
          Improve Your Life
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Start tracking your habits and moods to gain insights into your daily life.
        </p>
        <Button size="lg" className="mt-4" onClick={() => navigate('/dashboard')}>
          View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.section>

      {/* Habit Tracking Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold">Daily Habits</h3>
              <p className="text-muted-foreground mb-4">
                Track your daily habits and maintain streaks.
              </p>
              <Input placeholder="Add a new habit" className="mb-4" />
              <Button>Add Habit</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold">Mood Tracking</h3>
              <p className="text-muted-foreground mb-4">
                Log your mood daily to see trends over time.
              </p>
              <Select className="mb-4">
                <option>Happy</option>
                <option>Sad</option>
                <option>Neutral</option>
                <option>Excited</option>
                <option>Stressed</option>
              </Select>
              <Button>Log Mood</Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Progress Insights Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Progress Insights
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Analyze your habit streaks and mood trends over time.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Streaks</h3>
              <Progress value={75} className="mt-2" />
              <p className="text-muted-foreground mt-2">
                You're on a 7-day streak!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Smile className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Mood Trends</h3>
              <Progress value={60} className="mt-2" />
              <p className="text-muted-foreground mt-2">
                Your mood has been mostly positive this week.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  );
}
