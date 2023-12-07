import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#c6bd06',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>About Us</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Palestra Gym Philosophy
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Every drop of sweat, every sore muscle, and every ounce of effort is a step closer to your goals. <br/> <br/> Embrace the challenge, because in each workout, you are sculpting a stronger, healthier version of yourself. The pain you feel today is the strength you'll feel tomorrow.<br/> <br/> Keep pushing, and remember: fitness is not about being better than someone else; it's about being better than you used to be.
          </Typography>
          <img src="/palestra.png" alt="palestra" style={{ width: '100%', marginTop: '20px' }} />
        </Box>
      </Modal>
    </div>
  );
}
