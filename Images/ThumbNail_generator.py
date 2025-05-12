import os
from PIL import Image
import sys


def create_thumbnails(root_folder):
    supported_formats = ('.jpg', '.jpeg', '.png', '.gif', '.bmp')

    for foldername, subfolders, filenames in os.walk(root_folder):
        thumb_folder = os.path.join(foldername, 'Thumbnail_F')
        os.makedirs(thumb_folder, exist_ok=True)

        for filename in filenames:
            if filename.lower().endswith(supported_formats):
                try:
                    file_path = os.path.join(foldername, filename)
                    with Image.open(file_path) as img:
                        img.thumbnail((300, 300))
                        name, ext = os.path.splitext(filename)
                        new_name = f"{name}_THMB{ext}"
                        save_path = os.path.join(thumb_folder, new_name)
                        img.save(save_path)
                        print(f"Created: {save_path}")
                except Exception as e:
                    print(f"Error processing {filename}: {str(e)}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python image_thumbnailer.py [root_directory]")
        sys.exit(1)

    root_directory = sys.argv[1]
    if not os.path.isdir(root_directory):
        print(f"Error: {root_directory} is not a valid directory")
        sys.exit(1)

    create_thumbnails(root_directory)
    print("\nThumbnail creation complete!")

