import React, { useState } from 'react'

export default function InquiryForm({ onSuccess }){
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'', packageId:'' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e){ setForm(prev => ({ ...prev, [e.target.name]: e.target.value })) }

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    setError(null)
    try{
      await fetch('/api/inquiries', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      setLoading(false)
      onSuccess && onSuccess()
    }catch(err){ setError('Submit failed.'); setLoading(false) }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-lg">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" required />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" required />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" rows={4} required />
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}
      <button type="submit" disabled={loading} className="px-4 py-2 bg-indigo-600 text-white rounded-full">{loading ? 'Sending...' : 'Send Inquiry'}</button>
    </form>
  )
}
