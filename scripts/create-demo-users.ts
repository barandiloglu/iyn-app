import { PrismaClient, UserRole } from '../src/generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createDemoUsers() {
  try {
    console.log('Creating demo users...');

    // Create demo users with different roles
    const demoUsers = [
      {
        email: 'student@demo.com',
        password: bcrypt.hashSync('password123', 12),
        role: UserRole.STUDENT,
        firstName: 'Ahmet',
        lastName: 'Yılmaz',
      },
      {
        email: 'teacher@demo.com',
        password: bcrypt.hashSync('password123', 12),
        role: UserRole.TEACHER,
        firstName: 'Ayşe',
        lastName: 'Demir',
      },
      {
        email: 'parent@demo.com',
        password: bcrypt.hashSync('password123', 12),
        role: UserRole.PARENT,
        firstName: 'Mehmet',
        lastName: 'Kaya',
      },
      {
        email: 'admin@demo.com',
        password: bcrypt.hashSync('password123', 12),
        role: UserRole.ADMIN,
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

    console.log('\n🎉 Demo users created successfully!');
    console.log('\nDemo login credentials:');
    console.log('Email: student@demo.com, Password: password123 (Student)');
    console.log('Email: teacher@demo.com, Password: password123 (Teacher)');
    console.log('Email: parent@demo.com, Password: password123 (Parent)');
    console.log('Email: admin@demo.com, Password: password123 (Admin)');

  } catch (error) {
    console.error('❌ Error creating demo users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createDemoUsers();
