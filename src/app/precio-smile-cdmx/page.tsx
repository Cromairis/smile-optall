import { permanentRedirect } from 'next/navigation'
import { PRICE_ARTICLE_URL } from '@/lib/constants'

export default function PrecioSmilePage() {
  permanentRedirect(PRICE_ARTICLE_URL)
}
