export async function analyzeIdea(idea) {
  const text = idea.toLowerCase();

  if (text.includes("food")) {
    return {
      startupScore: 84,
      fundingPotential: 82,
      competitors: ["Zomato", "Swiggy", "Uber Eats"],
      swot: {
        strengths: "High daily demand",
        weaknesses: "Logistics intensive",
        opportunities: "Cloud kitchens",
        threats: "Heavy competition"
      },
      summary: "Food delivery and discovery platform.",
      problem: "Slow and fragmented food ordering experience.",
      audience: "Students, Families, Professionals",
      market: "TAM $10B | SAM $1B | SOM $100M",
      revenueModel: "Commission + Ads + Subscription",
      mvp: "Ordering, Tracking, Payments",
      techStack: "React, Node, MongoDB",
      growth: "Campus marketing and referrals",
      pitch: "Scalable food-tech startup."
    };
  }

  if (text.includes("job") || text.includes("career")) {
    return {
      startupScore: 90,
      fundingPotential: 88,
      competitors: ["LinkedIn", "Naukri", "Indeed"],
      swot: {
        strengths: "Huge user base",
        weaknesses: "Trust building required",
        opportunities: "AI matching",
        threats: "Established players"
      },
      summary: "AI-powered job finder platform.",
      problem: "Candidates struggle to find relevant jobs.",
      audience: "Students, Freshers, Professionals",
      market: "TAM $15B | SAM $2B | SOM $200M",
      revenueModel: "Recruiter subscriptions",
      mvp: "Resume Match, AI Suggestions",
      techStack: "React, Express, MongoDB",
      growth: "University partnerships",
      pitch: "Smart recruitment ecosystem."
    };
  }

  if (text.includes("health") || text.includes("medical") || text.includes("healthcare")) {
    return {
      startupScore: 92,
      fundingPotential: 90,
      competitors: ["Practo", "Apollo 24/7", "Tata Health"],
      swot: {
        strengths: "Essential service",
        weaknesses: "Compliance requirements",
        opportunities: "Telemedicine growth",
        threats: "Regulations"
      },
      summary: "Digital healthcare and consultation platform.",
      problem: "Limited access to quality healthcare.",
      audience: "Patients, Doctors, Hospitals",
      market: "TAM $50B | SAM $8B | SOM $500M",
      revenueModel: "Consultation fees + subscriptions",
      mvp: "Appointments, E-Prescriptions",
      techStack: "React, Node, PostgreSQL",
      growth: "Hospital partnerships",
      pitch: "Affordable digital healthcare solution."
    };
  }

  if (text.includes("education") || text.includes("edtech") || text.includes("learning")) {
    return {
      startupScore: 89,
      fundingPotential: 85,
      competitors: ["Byju's", "Unacademy", "Coursera"],
      swot: {
        strengths: "Scalable globally",
        weaknesses: "Content creation cost",
        opportunities: "AI tutors",
        threats: "Market saturation"
      },
      summary: "AI-powered learning platform.",
      problem: "Personalized learning is expensive.",
      audience: "Students and educators",
      market: "TAM $40B | SAM $5B | SOM $300M",
      revenueModel: "Subscriptions",
      mvp: "Courses, AI Tutor, Tests",
      techStack: "React, Firebase",
      growth: "Campus ambassadors",
      pitch: "Personalized education at scale."
    };
  }

  if (text.includes("finance") || text.includes("fintech") || text.includes("bank")) {
    return {
      startupScore: 91,
      fundingPotential: 89,
      competitors: ["Paytm", "PhonePe", "Razorpay"],
      swot: {
        strengths: "Large market",
        weaknesses: "Regulatory approvals",
        opportunities: "Digital payments",
        threats: "Security risks"
      },
      summary: "Fintech platform for smart finance management.",
      problem: "Financial planning is complex.",
      audience: "Consumers and SMEs",
      market: "TAM $60B | SAM $10B | SOM $700M",
      revenueModel: "Transaction fees",
      mvp: "Payments, Analytics",
      techStack: "React, Node",
      growth: "Referral programs",
      pitch: "Next-generation fintech ecosystem."
    };
  }

  if (text.includes("travel") || text.includes("tour")) {
    return {
      startupScore: 86,
      fundingPotential: 83,
      competitors: ["MakeMyTrip", "Booking", "Airbnb"],
      swot: {
        strengths: "Growing tourism",
        weaknesses: "Seasonal demand",
        opportunities: "AI itinerary planning",
        threats: "Economic slowdown"
      },
      summary: "Smart travel planning platform.",
      problem: "Trip planning is time consuming.",
      audience: "Travelers and tourists",
      market: "TAM $30B | SAM $4B | SOM $250M",
      revenueModel: "Booking commissions",
      mvp: "Bookings, AI planner",
      techStack: "React, Node",
      growth: "Travel influencers",
      pitch: "AI-powered travel assistant."
    };
  }

  if (text.includes("ecommerce") || text.includes("shopping")) {
    return {
      startupScore: 88,
      fundingPotential: 86,
      competitors: ["Amazon", "Flipkart", "Meesho"],
      swot: {
        strengths: "Massive market",
        weaknesses: "Inventory challenges",
        opportunities: "Social commerce",
        threats: "Price wars"
      },
      summary: "Modern e-commerce marketplace.",
      problem: "Fragmented online shopping experience.",
      audience: "Consumers and sellers",
      market: "TAM $100B | SAM $20B | SOM $1B",
      revenueModel: "Commission + Ads",
      mvp: "Storefront, Cart, Payments",
      techStack: "React, Node",
      growth: "Influencer marketing",
      pitch: "Next-gen online marketplace."
    };
  }

  return {
    startupScore: 80,
    fundingPotential: 75,
    competitors: ["Competitor A", "Competitor B", "Competitor C"],
    swot: {
      strengths: "Innovative concept",
      weaknesses: "Early stage",
      opportunities: "Growing market",
      threats: "Competition"
    },
    summary: `${idea} has startup potential.`,
    problem: "Problem statement requires validation.",
    audience: "General audience",
    market: "TAM $5B | SAM $500M | SOM $50M",
    revenueModel: "Subscription",
    mvp: "Core platform features",
    techStack: "React, Node.js",
    growth: "Digital marketing",
    pitch: "Promising startup opportunity."
  };
}