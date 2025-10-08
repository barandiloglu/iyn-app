"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function BlogPosts() {
  const { t, language } = useLanguage();

  const featuredPost = {
    title: "blog.featured.title",
    excerpt: "blog.featured.excerpt",
    author: "blog.featured.author",
    date: "blog.featured.date",
    category: "blog.featured.category",
    readTime: "blog.featured.readTime",
    image: "/blog/featured.jpg"
  };

  const posts = [
    {
      title: "blog.posts.post1.title",
      excerpt: "blog.posts.post1.excerpt",
      author: "blog.posts.post1.author",
      date: "blog.posts.post1.date",
      category: "blog.posts.post1.category",
      readTime: "blog.posts.post1.readTime"
    },
    {
      title: "blog.posts.post2.title",
      excerpt: "blog.posts.post2.excerpt",
      author: "blog.posts.post2.author",
      date: "blog.posts.post2.date",
      category: "blog.posts.post2.category",
      readTime: "blog.posts.post2.readTime"
    },
    {
      title: "blog.posts.post3.title",
      excerpt: "blog.posts.post3.excerpt",
      author: "blog.posts.post3.author",
      date: "blog.posts.post3.date",
      category: "blog.posts.post3.category",
      readTime: "blog.posts.post3.readTime"
    },
    {
      title: "blog.posts.post4.title",
      excerpt: "blog.posts.post4.excerpt",
      author: "blog.posts.post4.author",
      date: "blog.posts.post4.date",
      category: "blog.posts.post4.category",
      readTime: "blog.posts.post4.readTime"
    },
    {
      title: "blog.posts.post5.title",
      excerpt: "blog.posts.post5.excerpt",
      author: "blog.posts.post5.author",
      date: "blog.posts.post5.date",
      category: "blog.posts.post5.category",
      readTime: "blog.posts.post5.readTime"
    },
    {
      title: "blog.posts.post6.title",
      excerpt: "blog.posts.post6.excerpt",
      author: "blog.posts.post6.author",
      date: "blog.posts.post6.date",
      category: "blog.posts.post6.category",
      readTime: "blog.posts.post6.readTime"
    }
  ];

  return (
    <section key={`blog-posts-${language}`} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-oswald text-gray-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("blog.posts.title")}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("blog.posts.subtitle")}
          </motion.p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#0349AA] to-[#0091FF] rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(featuredPost.category)}
                  </span>
                  <span className="text-white/80 text-sm">
                    {t(featuredPost.readTime)}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold font-oswald mb-4">
                  {t(featuredPost.title)}
                </h3>
                
                <p className="text-white/90 leading-relaxed mb-6">
                  {t(featuredPost.excerpt)}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">I</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{t(featuredPost.author)}</p>
                      <p className="text-white/70 text-sm">{t(featuredPost.date)}</p>
                    </div>
                  </div>
                  
                  <motion.button
                    className="bg-white text-[#0349AA] font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-100"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("blog.posts.readMore")}
                  </motion.button>
                </div>
              </div>
              
              <div className="relative h-64 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="text-6xl">📚</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Post Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#0349AA]/10 to-[#ec8d13]/10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-4xl">📖</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#ec8d13] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(post.category)}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{t(post.date)}</span>
                  <span>•</span>
                  <span>{t(post.readTime)}</span>
                </div>
                
                <h3 className="text-xl font-bold font-oswald text-gray-800 leading-tight">
                  {t(post.title)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(post.excerpt)}
                </p>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#0349AA] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">I</span>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">
                      {t(post.author)}
                    </span>
                  </div>
                  
                  <motion.button
                    className="text-[#0349AA] font-medium hover:text-[#0091FF] transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {t("blog.posts.readMore")} →
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#0349AA] to-[#0091FF] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(3, 73, 170, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t("blog.posts.loadMore")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
