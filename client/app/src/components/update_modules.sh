#!/bin/bash

# Function to update a component file
update_component() {
  local file=$1
  local component_name=$(basename $(dirname "$file"))
  
  # Skip if already has styles import
  if grep -q "import styles from" "$file"; then
    echo "✓ $component_name already updated"
    return
  fi
  
  # Add styles import and cx after other imports
  perl -i -pe 's/(import.*from ["\x27][^"'\'']+["\x27];)/$1\nimport styles from ".\/'${component_name}'.module.css";\nimport { cx } from "..\/..\/lib\/cx";/ if eof' "$file"
  
  # Replace className="x" with className={styles.x} (simple cases)
  # This won't catch all cases perfectly, but handles most
  perl -i -pe 's/className="([a-z][a-z-]*)"/className={styles["\1"]}/g' "$file"
  
  # Fix cases like className="x y" to use cx()
  perl -i -pe 's/className={styles\["([^"]+)"\]} ([a-z][a-z-]*)=?\s*{styles\["([^"]+)"\]}/className={cx(styles["\1"], styles["\3"])} $2/g' "$file"
  
  echo "✓ Updated $component_name"
}

# Update all TSX files
for file in *//*.tsx; do
  [ -f "$file" ] && update_component "$file"
done
