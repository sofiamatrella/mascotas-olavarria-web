import { CircularProgress } from '@mui/material';
import styles from './Button.module.css';

interface ButtonProps {
	loading: boolean;
	children: string;
	[x: string]: any;
}

export default function Button({ loading, children, ...props }: ButtonProps) {
	return (
		<button
			disabled={loading}
			className={`${loading ? styles.button_disabled : styles.button}`}
			{...props}
		>
			{loading && (
				<CircularProgress
					size={24}
					sx={{ position: 'absolute', color: '#435021' }}
				/>
			)}
			{children}
		</button>
	);
}
