'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'

import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/HeaderCart'

const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()

	return (
		<header
			className='bg-secondary w-full py-6 px-6 grid'
			style={{
				gridTemplateColumns: '0.6fr 1fr 0.3fr 0.3fr 0.3fr 0.3fr 0.7fr',
				alignItems: 'center'
			}
		}
		>
			<Link href='/'>
				{isAdminPanel ? (
					<h2 className=
						'text-3xl text-white font-semibold'>Admin Panel</h2>
				) : (
					<Image
						priority
						width={210}
						height={40}
						src='/images/logo.svg'
						alt='StroyMarket'
					/>
				)}
			</Link>
			<Search />
			<span>
			</span>
					<Link 
						href='/explorer'
                         className= 'hover:text-primary transition-colors duration-200 text-white inline-block text-lg'
						 >
                            Каталог
                    </Link>
					<Link 
						href='/explorer'
                         className= 'hover:text-primary transition-colors duration-200 text-white inline-block text-lg'
						 >
                            Доставка
                    </Link>
					<Link 
						href='/explorer'
                         className= 'hover:text-primary transition-colors duration-200 text-white inline-block text-lg'
						 >
                            О нас
                    </Link>
					
			<div 
				className='flex align-end justify-end gap-10'>
				{user?.isAdmin && !isAdminPanel && (
					<Link
						href='/admin'
						className='hover:text-primary transition-colors duration-200 text-white inline-block text-lg'
					>
						<MdOutlineAdminPanelSettings size={40} />
					</Link>
				)}
				<Link href='/favorites'
				 className='hover:text-red transition-colors duration-200 text-white inline-block text-lg'>
					<AiFillHeart size={40} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
