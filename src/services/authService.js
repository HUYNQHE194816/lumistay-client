import { supabase } from '../utils/supabaseClient';
import api from '../utils/api';

export const authService = {
  /**
   * Khởi chạy quá trình đăng nhập qua Google OAuth
   */
  loginWithGoogle: async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) throw error;
    return data;
  },

  /**
   * Đăng xuất
   */
  logout: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  /**
   * Đồng bộ user lên backend sau khi đăng nhập
   * @param {Object} user - User object từ Supabase session
   */
  syncGoogleUser: async (user) => {
    try {
      const response = await api.post('/auth/google-sync', { user });
      return response.data;
    } catch (error) {
      console.error('Lỗi đồng bộ thông tin user với server:', error);
      throw error;
    }
  }
};
