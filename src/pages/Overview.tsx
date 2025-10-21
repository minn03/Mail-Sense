import { Field, FieldLabel, FieldSeparator, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/ui/shadcn-io/dropzone';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function Overview() {
  const [files, setFiles] = useState<File[] | undefined>();

  const handleDrop = (files: File[]) => {
    console.log(files);
    setFiles(files);
  };

  return (
    <div className="bg-background mx-20 my-4 min-h-screen px-12 py-8">
      <FieldSet className="mb-6">
        <Field>
          <FieldLabel htmlFor="emailAddress">Email Address</FieldLabel>
          <Input id="emailAddress" type="text" placeholder="who123@gmail.com" />
        </Field>

        <Field>
          <FieldLabel htmlFor="emailSubject">Email Subject</FieldLabel>
          <Input id="emailSubject" type="text" placeholder="Type the email title here" />
        </Field>

        <Field>
          <FieldLabel htmlFor="emailContent">Email Content</FieldLabel>
          <Textarea
            id="emailContent"
            placeholder="Paste your email content here"
            rows={10}
          ></Textarea>
        </Field>
      </FieldSet>
      <FieldSeparator className="my-6" />
      <Field>
        <FieldLabel htmlFor="emailUpload">Upload Email File</FieldLabel>
        <Dropzone
          className="flex h-40 w-full items-center justify-center border-2 border-dashed border-gray-300 transition hover:border-gray-400"
          maxSize={1024 * 1024 * 10}
          minSize={1024}
          onDrop={handleDrop}
          onError={console.error}
          src={files}
        >
          <DropzoneEmptyState />
          <DropzoneContent />
        </Dropzone>
      </Field>
    </div>
  );
}
