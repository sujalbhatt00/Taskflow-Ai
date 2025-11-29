import React, { useState, useEffect } from "react";
import Hero from "./hero";
// import RoommateCard from "@/components/RoommateCard"; // Uncomment if RoommateCard exists
import { Loader2 } from "lucide-react";
// import axios from "@/api/axiosInstance"; // Uncomment if axios is available

const Home = () => {
  const [featuredRoommates, setFeaturedRoommates] = useState([]);
  const [loadingRoommates, setLoadingRoommates] = useState(true);

  useEffect(() => {
    // Uncomment and update this block if axios and API are available
    /*
    const fetchFeaturedRoommates = async () => {
      setLoadingRoommates(true);
      try {
        const res = await axios.get("/user/featured");
        setFeaturedRoommates(res.data);
      } catch (error) {
        console.error("Failed to fetch featured roommates:", error);
      } finally {
        setLoadingRoommates(false);
      }
    };
    fetchFeaturedRoommates();
    */
    setLoadingRoommates(false);
    setFeaturedRoommates([]); // Placeholder: No roommates
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Hero />

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-br from-white to-[#f0f1ff] border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#5b5dda]">
            Why MateStay?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-white shadow-md border text-center">
              <h3 className="text-2xl font-bold mb-3">Verified Roommates</h3>
              <p className="text-gray-600">
                Every user is identity-checked for safety & authenticity.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-md border text-center">
              <h3 className="text-2xl font-bold mb-3">Safe & Secure</h3>
              <p className="text-gray-600">
                End-to-end security and a trusted roommate community.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-md border text-center">
              <h3 className="text-2xl font-bold mb-3">Find the Perfect Match</h3>
              <p className="text-gray-600">
                Match with people who fit your lifestyle & vibe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED USERS */}
      <section className="py-20 bg-[#fafaff] border-y relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Featured Roommates
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with verified people who share your lifestyle.
          </p>
          {loadingRoommates ? (
            <div className="flex justify-center py-14">
              <Loader2 className="h-12 w-12 animate-spin text-[#5b5dda]" />
            </div>
          ) : featuredRoommates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {/* {featuredRoommates.map((roommate) => (
                <RoommateCard key={roommate._id} roommate={roommate} />
              ))} */}
              {/* Add RoommateCard component here if available */}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-10">
              No featured roommates available right now.
            </p>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#5b5dda] text-white text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Find Your Perfect Room or Roommate Today
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Thousands of people found their match on MateStay.
        </p>
        <a
          href="/find-rooms"
          className="inline-block bg-white text-[#5b5dda] px-8 py-3 text-lg font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Browse Rooms
        </a>
      </section>
    </div>
  );
};

export default Home;