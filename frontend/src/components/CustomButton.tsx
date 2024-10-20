import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

interface Props {
  href: string;
  text: string;
  external?: boolean; // Indicates if the link is external
  ariaLabel?: string; // Optional aria-label for accessibility
  title?: string; // Optional title for additional context
}

const CustomButton = ({
  href,
  text,
  external = false,
  ariaLabel,
  title,
}: Props): JSX.Element => {
  const theme = useTheme();

  // Determine if the link is external
  const isExternal = external || href.startsWith('http');

  return (
    <Button
      component="a"
      color="primary"
      href={href}
      variant="text"
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel || text}
      title={title || text}
      sx={{
        color: theme.palette.text.primary,
        textTransform: 'uppercase',
        marginX: 1.5,
        marginLeft: '15px',
        '&:active': {
          color:
            theme.palette.mode === 'dark'
              ? theme.palette.primary.main
              : theme.palette.success.dark,
        },
        '&:hover': {
          color:
            theme.palette.mode === 'dark'
              ? theme.palette.primary.main
              : theme.palette.success.dark,
        },
        // Optional: Add focus styles for better accessibility
        '&:focus': {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: '2px',
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
