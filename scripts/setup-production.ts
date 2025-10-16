import { PrismaClient } from '../src/generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function setupProduction() {
  try {
    console.log('🚀 Setting up production database...');

    // Check if users already exist
    const existingUsers = await prisma.user.count();
    
    if (existingUsers > 0) {
      console.log(`⚠️  Found ${existingUsers} existing users. Skipping user creation.`);
      console.log('If you want to recreate users, delete them first and run this script again.');
    } else {
      console.log('📝 Creating demo users...');

      // Create demo users with different roles
      const demoUsers = [
        {
          email: 'student@demo.com',
          password: bcrypt.hashSync('password123', 12),
          role: 'STUDENT' as const,
          firstName: 'Ahmet',
          lastName: 'Yılmaz',
        },
        {
          email: 'teacher@demo.com',
          password: bcrypt.hashSync('password123', 12),
          role: 'TEACHER' as const,
          firstName: 'Ayşe',
          lastName: 'Demir',
        },
        {
          email: 'parent@demo.com',
          password: bcrypt.hashSync('password123', 12),
          role: 'PARENT' as const,
          firstName: 'Mehmet',
          lastName: 'Kaya',
        },
        {
          email: 'admin@demo.com',
          password: bcrypt.hashSync('password123', 12),
          role: 'ADMIN' as const,
          firstName: 'Admin',
          lastName: 'User',
        },
      ];

      for (const userData of demoUsers) {
        try {
          const user = await prisma.user.create({
            data: userData,
          });
          console.log(`✅ Created ${user.role.toLowerCase()}: ${user.email}`);
        } catch (error) {
          if (error instanceof Error && error.message.includes('Unique constraint')) {
            console.log(`⚠️  User ${userData.email} already exists, skipping...`);
          } else {
            console.error(`❌ Error creating user ${userData.email}:`, error);
          }
        }
      }

      console.log('\n🎉 Production setup completed successfully!');
      console.log('\nDemo login credentials:');
      console.log('Email: student@demo.com, Password: password123 (Student)');
      console.log('Email: teacher@demo.com, Password: password123 (Teacher)');
      console.log('Email: parent@demo.com, Password: password123 (Parent)');
      console.log('Email: admin@demo.com, Password: password123 (Admin)');
    }

  } catch (error) {
    console.error('❌ Error setting up production:', error);
  } finally {
    await prisma.$disconnect();
  }
}

setupProduction();
