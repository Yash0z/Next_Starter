'use client';
import { toast } from 'sonner';
import CustomToast from '@/components/misc/customToast';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <Button onClick={() => toast.custom((t) => <CustomToast t={t} />)}>
        Notify
      </Button>
    </div>
  );
}
