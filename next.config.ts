import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	
	serverExternalPackages: ['@prisma/client', 'prisma'],

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
			},
			{
				protocol: 'https',
				hostname: '**.supabase.co',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'plus.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'randomuser.me',
			},
			{
				protocol: 'https',
				hostname: 'avatar.iran.liara.run',
			},
			{
				protocol: 'https',
				hostname: 'example.com',
			}
		],
	},
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
