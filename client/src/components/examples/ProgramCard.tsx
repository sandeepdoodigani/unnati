import ProgramCard from '../ProgramCard';
import { BookOpen } from 'lucide-react';

export default function ProgramCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProgramCard
        icon={BookOpen}
        title="Education & Digital Literacy"
        description="Empowering communities through comprehensive education programs and digital literacy initiatives."
      />
    </div>
  );
}
